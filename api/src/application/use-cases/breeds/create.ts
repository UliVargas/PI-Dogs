import { BreedEntity } from '../../../core/entities/breed.entity'
import { createBreedService } from '../../../infrastructure/repositories/sequelize/breed.repository'

export default (breedPayload: BreedEntity) => {
  return createBreedService(breedPayload)
}
