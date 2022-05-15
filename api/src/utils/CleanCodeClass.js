const Breed = require('../entities/breed')

class CleanCode {
  temperaments (data) {
    const temperaments = []
    for (const temp of data) {
      const temps = temp.temperament?.split(',')
      temps?.map(t => temperaments.push(t.trim()))
    }
    return temperaments
  }

  breeds (data, name) {
    if (!name) {
      return data.map(breed => (
        Breed(breed)
      ))
    } else {
      const searchBreed = []
      for (const breed of data) {
        if (breed.name.includes(name.charAt(0).toUpperCase())) {
          searchBreed.push(
            Breed(breed)
          )
        }
      }
      return searchBreed
    }
  }

  breedById (data) {
    return Breed(data)
  }
}

module.exports = CleanCode
