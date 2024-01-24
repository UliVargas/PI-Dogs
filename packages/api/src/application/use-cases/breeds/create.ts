import { BreedEntity } from '../../../core/entities/breed.entity'
import { CreateBreed as ICreateBreed } from '../../../core/interfaces/breed.interface'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type CreateBreed = (breedPayload: ICreateBreed) => Promise<BreedEntity>
export default (dependencies: Dependencies): CreateBreed => async (payload) => {
  const breed = await dependencies.breedsRepository.create(payload)

  if (payload.Temperaments.length > 0) {
    for (const temperament of payload.Temperaments) {
      const newTemperament = await dependencies.temperamentRepository.create(temperament)
      dependencies.breedsRepository.addTemperamentToBreed(breed.id, newTemperament.id)
    }
  }

  return breed
}
