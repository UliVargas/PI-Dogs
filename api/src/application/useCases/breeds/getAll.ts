import { BreedEntity } from '../../../core/entities/breed.entity'
import { countService, getAllBreedsService, getBreedByNameService } from '../../../infrastructure/services/breed.service'

interface Response {
  breeds: BreedEntity[] | BreedEntity
  count: number
}

export default async (name: string): Promise<Response> => {
  let count = 0
  let breeds

  if (!name) {
    breeds = await getAllBreedsService()
    count = await countService() + breeds.length
  } else {
    breeds = await getBreedByNameService(name)
    count = breeds.length
  }

  return {
    count,
    breeds
  }
}
