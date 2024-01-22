import { BreedEntity } from '../../../core/entities/breed.entity'
import { CreateBreed as ICreateBreed } from '../../../core/interfaces/breed.interface'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type CreateBreed = (breedPayload: ICreateBreed) => Promise<BreedEntity>
export default (dependencies: Dependencies): CreateBreed => (payload) => {
  return dependencies.breedsRepository.create(payload)
}
