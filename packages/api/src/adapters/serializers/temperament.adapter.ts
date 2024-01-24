import { BreedAPI } from '../../infrastructure/interfaces/breed.interface'
import { capitalizeFirstLetter } from '../../infrastructure/utils/capitalizeFirstLetter'

export const breedAPIAdapter = (breed: BreedAPI) => {
  return breed.temperament?.split(',').map(temperament => capitalizeFirstLetter(temperament.trim()))
}
