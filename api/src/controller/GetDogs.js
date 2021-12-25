const { API_KEY } = process.env;
const {Temperament, Breed } = require("../db")
const { Op } = require("sequelize");
const axios = require('axios');

async function getDogs(req, res) {

  try {
    const Breeds = []
    const temperamentsApi = [];
    const { name } = req.query;
    const resp = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then(data => data.data);

    if (!name) {
      if (name !== null || name !== undefined) {
        for await (let element of resp) {
          Breeds.push({
            name: element.name,
            temperaments: element?.temperament?.toLocaleLowerCase(),
            img: element.image.url,
            id: element.id,
            weight: element.weight.metric
          })
        };

        for ( const data of resp) {
          const temps = data.temperament?.split(",");
          temps?.map(e => temperamentsApi.push(e.trim()));
        }
        
        for (const data of temperamentsApi) {
          const [temp, created] = await Temperament.findOrCreate({ where: { name: data } })
        }

        const dbBreeds = await Breed.findAll({
          include: Temperament
        });
        
        for (let element of dbBreeds) {
          let arrayTemperaments = [];
          for (let temp of element?.dataValues?.temperaments) {
            arrayTemperaments.push(temp.dataValues.name)
          }
          Breeds.push({
            name: element.dataValues.name,
            temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(),
            img: element.dataValues.img,
            id: element.dataValues.id,
            weight: element.dataValues.weight
          })
        }
        res.json({
          data: Breeds
        })
      }
    } else {
      const arraySearch = [];

        for await (let breed of resp) {
          if (breed.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
            arraySearch.push({
              name: breed.name,
              temperaments: breed?.temperament?.toLocaleLowerCase(),
              img: breed.image.url,
              id: breed.id,
              weight: breed.weight.metric
            })
          }
        }

        //DB

        const dbBreeds = await Breed.findAll({
          include: Temperament,
          where: {
            name: {
              [Op.substring]: name.toLocaleLowerCase()
            }
          }
        });

        for await (let breed of dbBreeds) {
          let arrayTemperaments = [];
          for await (let temp of breed?.dataValues?.temperaments) {
            arrayTemperaments.push(temp.dataValues.name)
          }

          arraySearch.push({
            name: breed.dataValues.name,
            temperaments: arrayTemperaments.join(", ").toLocaleLowerCase(),
            img: breed.dataValues.img,
            id: breed.dataValues.id,
            weight: breed.dataValues.weight
          })
        };

        if(arraySearch.length === 0) {
          return res.status(404).json({msg: "Breed not found"});
        } else {
          res.json({
            data: arraySearch
          });
        }


    }
  } catch (error) {
    console.log(error)
  }
};

async function getDogsId(req, res) {
  try {
    const id = req.params.id;
    if (id < 1000) {
      const apiId = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then(data => {
          for (let element of data.data) {
            if (element.id === Number(id)) {
              return element;
            }
          }
        });
      if (apiId !== undefined) {
        return res.json({
          id: apiId.id,
          name: apiId.name,
          height: apiId.height.metric,
          weight: apiId.weight.metric,
          life_span: apiId.life_span,
          img: apiId.image.url,
          temperaments: apiId.temperament
        });
      } else {
        return res.status(404).json({
          msg: "Breed not found"
        });
      };
    } else {
      const arrayTemps = [];
      const dbId = await Breed.findByPk(id, {
        include: Temperament
      });

      if (dbId !== null) {
        for await (let temperament of dbId.temperaments) {
          arrayTemps.push(temperament.dataValues.name)
        };
        return res.json({
          id: dbId.id,
          name: dbId.name,
          height: dbId.height,
          weight: dbId.weight,
          life_span: dbId.life_span,
          img: dbId.img,
          temperaments: arrayTemps.join(", ")
        });
      } else {
        return res.status(404).json({
          msg: "Breed not found"
        });
      }
    }
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  getDogs,
  getDogsId
};
