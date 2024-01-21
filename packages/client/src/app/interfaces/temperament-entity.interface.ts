import { BreedEntity } from './breed-entity.interface'

export interface TemperamentEntity {
  id: string,
  name: string,
  breeds: Omit<BreedEntity[], 'Temperaments'>
  createdAt: Date,
  updatedAt: Date
}