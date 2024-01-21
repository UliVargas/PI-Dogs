import { BreedEntity } from './breed.entity'

export interface TemperamentEntity {
  id: string
  name: string,
  Breeds?: BreedEntity[]
}
