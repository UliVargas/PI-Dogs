import { BreedEntity } from '../../../core/entities/breed.entity'
import { findBreedByIdService } from '../../../infrastructure/services/breed.service'

export default (id: string): Promise<BreedEntity> => {
  return findBreedByIdService(id)
}
