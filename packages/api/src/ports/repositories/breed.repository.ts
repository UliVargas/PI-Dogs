import { Repository } from '.'
import { BreedEntity } from '../../domain/entities/breed.entity'

export interface BreedRepository extends Repository<BreedEntity> {
  addTemperamentToBreed(breedId: string, temperamentId: string): Promise<{ BreedId: string; TemperamentId: string }>
}
