import { BreedEntity } from '../../entities/breed.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type FindOneBreed = (id: string) => Promise<BreedEntity | null>
export default (dependencies: Dependencies): FindOneBreed => async (id: string) => {
  return await dependencies.breedsRepository.findOne(id)
}
