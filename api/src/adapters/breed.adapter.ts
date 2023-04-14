import { BreedEntity } from '../entities/breed.entity'
import { BreedAPI } from '../interfaces/breed.interface'

export const breedAPIAdapter = (breed: BreedAPI): BreedEntity => {
  return {
    name: breed.name,
    height: breed.height.metric,
    weight: breed.weight.metric,
    id: breed.id,
    image: breed.image.url,
    life_span: breed.life_span,
    temperaments: breed.temperament?.split(',').map(temperament => temperament.trim()) ?? []
  }
}
