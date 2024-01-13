import { BreedAPI } from '../../core/interfaces/breed.interface'
import { capitalizeFirstLetter } from '../orm/sequelize/utils/capitalizeFirstLetter'

export const breedAPIAdapter = (breed: BreedAPI) => {
  return breed.temperament?.split(',').map(temperament => capitalizeFirstLetter(temperament.trim()))
}
