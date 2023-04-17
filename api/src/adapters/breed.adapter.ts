import { BreedEntity } from '../entities/breed.entity'
import { BreedAPI } from '../interfaces/breed.interface'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

export const breedAPIAdapter = (breed: BreedAPI): BreedEntity => {
  return {
    name: breed.name,
    height: breed.height.metric,
    weight: breed.weight.metric,
    id: breed.id,
    image: breed.image.url,
    life_span: breed.life_span,
    Temperaments: breed.temperament?.split(',').map(temperament => capitalizeFirstLetter(temperament.trim())) ?? []
  }
}

export const breedDBAdapter = (breed: any) => {
  return {
    ...breed,
    Temperaments: breed.Temperaments.map((temperament: any) => temperament.name)
  }
}
