const { Breed, Temperament } = require("../db");


async function postDog(req, res) {
    const {name, temperaments, height, weight, image, life_span} = req.body;
    const [breed, created] = await Breed.findOrCreate({
      where: {
        name: name
      },
          defaults: {
            height,
            weight,
            life_span,
            image
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

    if(!created) return res.status(404).json({mesg: "It is not possible to create the breed in the database, information is missing or that breed already exists"});

    return res.status(201).json({data: breed.id})
}

module.exports = {
  postDog
};
