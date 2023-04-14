import Breed from './breed.model'
import Temperament from './temperament.model'

Breed.belongsToMany(Temperament, {
  through: 'Breed_Temperament'
})
Temperament.belongsToMany(Breed, {
  through: 'Breed_Temperament'
})

export const BreedModel = Breed
export const TemperamentModel = Temperament
