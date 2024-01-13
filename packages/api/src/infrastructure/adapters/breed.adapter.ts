import { BreedAPI } from '../../core/interfaces/breed.interface'
import { capitalizeFirstLetter } from '../orm/sequelize/utils/capitalizeFirstLetter'

export const breedAPIAdapter = (breed: BreedAPI) => {
  return {
    name: breed.name,
    height: breed.height.metric,
    weight: breed.weight.metric,
    image: breed.image.url,
    life_span: breed.life_span,
    temperaments: breed.temperament?.split(',').map(temperament => capitalizeFirstLetter(temperament.trim())) ?? []
  }
}

export const breedDBAdapter = (breed: any) => {
  return {
    ...breed,
    Temperaments: breed.Temperaments.map((temperament: any) => temperament.name)
  }
}
