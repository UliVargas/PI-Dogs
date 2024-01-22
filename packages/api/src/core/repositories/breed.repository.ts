import { Repository } from '.'
import BreedTemperament from '../../infrastructure/orm/sequelize/models/breed-temperament.model'
import { BreedEntity } from '../entities/breed.entity'

export interface BreedRepository extends Repository<BreedEntity> {
  addTemperamentToBreed(temperamentName: string, breedId: string): Promise<BreedTemperament>
}
