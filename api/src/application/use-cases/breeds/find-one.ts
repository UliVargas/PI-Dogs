import { BreedEntity } from '../../../core/entities/breed.entity'
import { findBreedByIdService } from '../../../infrastructure/repositories/sequelize/breed.repository'

export default (id: string): Promise<BreedEntity> => {
  return findBreedByIdService(id)
}
