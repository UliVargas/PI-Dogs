const { Breed, Temperament } = require("../db");


async function postDog(req, res) {
    const {name, temperaments, height, weight, life} = req.body;
    const [breed, created] = await Breed.findOrCreate({
        where: {name},
        defaults: {
            height, 
            weight, 
            life
        }

    })
    if(temperaments && created){
        for await (let temperament of temperaments) {
          const [temp, created] = await Temperament.findOrCreate({
            where: {name: temperament}
          })
          await breed.addTemperament(temp);
        }
      }

    if(!created) return res.json("noCreated");

    return res.json(breed.id)
}

module.exports = {
  postDog
};