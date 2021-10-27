const { API_KEY } = process.env;
const { Breed, Temperament } = require("../db");
const { Op } = require("sequelize");
const axios = require('axios');

async function getDogs(req, res) {

    try {
    const { name } = req.query;
    const resp = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then(data => data.data);

    if (!name) {
        const Breeds = []
        const temperamentsApi = [];
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
              if(temp[j] !== "") {
                temperamentsApi.push(temp[j].trim())
              }
            }
          }
          temperamentsApi.forEach((temp)=>{
            Temperament.findOrCreate({
              where: {
                name: temp
              }
            })
          })

        const dbBreeds = await Breed.findAll({ include: Temperament });
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
   } catch (error) {
       console.log(error)
   }
};

async function getDogsId(req, res) {
    try {
      const id = req.params.id;
      if( id < 1000) {

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


      } else {

          const arrayTemps = [];
          const dbId = await Breed.findByPk(id, {include: Temperament});
            console.log(dbId)
          if (dbId !== null) {
            for await(let temperament of dbId.temperaments) {
              arrayTemps.push(temperament.dataValues.name)
            }

            return res.json({
                id: dbId.id,
                name: dbId.name,
                height: dbId.height,
                weight: dbId.weight,
                life_span: dbId.life_span,
                img: dbId.img,
                temperaments: arrayTemps.join(", ")
            });
          } else return res.status(404).json({msg: "Breed not found"});
      }
    } catch(error) {
        console.log(error)
    }
};

module.exports = {
    getDogs,
    getDogsId
};
