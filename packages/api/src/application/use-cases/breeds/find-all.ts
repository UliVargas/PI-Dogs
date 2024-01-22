import { BreedEntity } from '../../../core/entities/breed.entity'
import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'
import { pagination } from '../../../infrastructure/utils/pagination'

interface Response {
  breeds: BreedEntity[]
  pagination: {
    totalCount: number
    currentPage: number
    nextPage: number | null
    previousPage: number | null
    totalPages: number
  }
}

type FindAllBreeds = ({
  name,
  page,
  limit,
  sort,
  temperament
}: {
  name?: string,
  page: string,
  limit: string,
  sort: 'ASC' | 'DESC'
  temperament: string
}) => Promise<Response>

export default (dependencies: Dependencies): FindAllBreeds => async ({
  name,
  page = '1',
  limit = '10',
  sort = 'ASC',
  temperament
}) => {
  let breeds: BreedEntity[] = []
  let totalCount = 0

  if (temperament) {
    const { data } = await dependencies.temperamentRepository.findAll({ page: Number(page), limit: parseInt(limit, 10) || 10, sort: 'ASC', name: temperament })
    breeds = data.flatMap((temperament: TemperamentEntity) => temperament.Breeds ?? [])
    totalCount = breeds.length
  } else {
    const resp = await dependencies.breedsRepository.findAll({ name, page: Number(page), limit: parseInt(limit, 10) || 10, sort, temperament })
    breeds = resp.data
    totalCount = resp.count
  }

  const {
    currentPage,
    nextPage,
    previousPage,
    totalPages
  } = pagination({ page, limit, totalCount })

  return {
    pagination: {
      totalCount,
      previousPage,
      currentPage,
      nextPage,
      totalPages
    },
    breeds
  }
}
