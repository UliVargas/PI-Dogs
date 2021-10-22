const { API_KEY } = process.env;
const { Breed, Temperament } = require("../db");
const { Op } = require("sequelize");
const axios = require('axios');
const temps = new Set();

async function getDogs(req, res) {
    const { name } = req.query;
    const dbBreeds = await Breed.findAll({ include: Temperament });
    const resp = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then(data => data.data);

    if (!name) {
        const Breeds = []
        for await (let element of resp) {
            Breeds.push({
                name: element.name,
                temperaments: element?.temperament?.toLocaleLowerCase(),
                img: element.image.url,
                id: element.id,
                weight: element.weight.metric
            })
        }

        for (let i = 0; i < resp.length; i++) {
            let temp = resp[i].temperament?.split(",");
            
            for (let j = 0; j < temp?.length; j++) {
              temps.add(temp[j].trim())
            } 
          }
          temps.forEach((temp)=>{
            Temperament.create({
              name: temp
            })
          })
        
        for await (let element of dbBreeds) {
            let arrayTemperaments = [];
            for await (let temp of element?.dataValues?.temperaments){
                arrayTemperaments.push(temp.dataValues.name)
            }
            Breeds.push({name: element.dataValues.name, 
                temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(), 
                img: element.dataValues.img, 
                id: element.dataValues.id,
                weight: element.dataValues.weight})
            }
            res.json({
                data: Breeds
            })
    } else {
        
        const arraySearch = [];
        for await (let element of resp) {
            if (element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
                arraySearch.push({
                    name: element.name,
                    temperaments: element?.temperament?.toLocaleLowerCase(),
                    img: element.image.url,
                    id: element.id,
                    weight: element.weight.metric
                })
            }
        }

        const dbHasWord = await Breed.findAll(
            {include: Temperament,
            where: {
              name: {
                [Op.substring]: name.toLocaleLowerCase()
              }
            }
          }
          );

          for await (let element of dbHasWord) {
            let arrayTemperaments = [];
            for await (let temp of element?.dataValues?.temperaments){
              arrayTemperaments.push(temp.dataValues.name)
            }
      
            arraySearch.push({name: element.dataValues.name, 
                              temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(), 
                              img: element.dataValues.img, 
                              id: element.dataValues.id,
                              weight: element.dataValues.weight})
          };
        res.json({
            data: arraySearch
        });
    }
};

async function getDogsId(req, res) {
    const { id } = req.params;
    const dbId = await Breed.findByPk(Number(id), {include: Temperament});
    const arrayTemps = [];

    for await(let temperament of dbId.temperaments) {
        arrayTemps.push(temperament.dataValues.name)
    }

    if (dbId) return res.json({
        id: dbId.id,
        name: dbId.name,
        height: dbId.height,
        weight: dbId.weight,
        life_span: dbId.life_span,
        img: dbId.img,
        temperaments: arrayTemps.join(", ")
    });

    const apiId = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then(data => {
            for (let element of data.data) {
                if (element.id === Number(id)) {
                    return element;
                }
            }
        });
    if (apiId !== undefined) return res.json({
        id: apiId.id,
        name: apiId.name,
        height: apiId.height.metric,
        weight: apiId.weight.metric,
        life_span: apiId.life_span,
        img: apiId.image.url,
        temperaments: apiId.temperament
    });
    else res.status(404).json("");
};

module.exports = {
    getDogs,
    getDogsId
};