import { Repository } from '.'
import { BreedEntity } from '../entities/breed.entity'

export interface BreedRepository extends Repository<BreedEntity> {
  addTemperamentToBreed(breedId: string, temperamentId: string): Promise<{ BreedId: string; TemperamentId: string }>
}
