import Breed from './breed.model'
import Temperament from './temperament.model'
import BreedTemperament from './breed-temperament.model'

Breed.belongsToMany(Temperament, {
  through: { model: BreedTemperament, unique: true }
})
Temperament.belongsToMany(Breed, {
  through: { model: BreedTemperament, unique: true }
})

export const BreedModel = Breed
export const TemperamentModel = Temperament
export const BreedTemperamentModel = BreedTemperament
