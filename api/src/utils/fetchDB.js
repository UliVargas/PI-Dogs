const { Temperament, Breed } = require('../db')

class FetchDB {
  async createTemperament (temperaments) {
    for (const data of temperaments) {
      await Temperament.findOrCreate({
        where: {
          name: data
        }
      })
    }
  }

  async getTemperaments () {
    return Temperament.findAll()
  }

  async createBreed (data) {
    const { name, temperaments, height, minWeight, maxWeight, img, life_span } = data
    
    const weight = {
      metric: `${minWeight} - ${maxWeight}`
    }
    
    const [breed, created] = await Breed.findOrCreate({
      where: { name },
      defaults: {
        height,
        weight,
        img,
        life_span
      }
    })

    if (temperaments && created) {
      for await (const temperament of temperaments) {
        const [temp] = await Temperament.findOrCreate({
          where: { name: temperament }
        })
        await breed.addTemperament(temp)
      }
    }
  }

  async getBreeds () {
    const breeds = await Breed.findAll({
      include: Temperament
    })
    return breeds.map(breed => ({
      ...breed.dataValues,
      temperament: breed.dataValues.temperaments.map(temperament => temperament.name).join(', ')
    }))
  }
}

module.exports = FetchDB
