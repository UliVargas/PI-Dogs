import { BreedEntity } from '../../../core/entities/breed.entity'
import { breedCountService, getAllBreedsService } from '../../../infrastructure/repositories/sequelize/breed.repository'
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

export default async ({
  name,
  page = '1',
  limit = '10',
  sort = 'ASC',
  temperamentName
}: {
  name?: string,
  page: string,
  limit: string,
  sort: 'ASC' | 'DESC'
  temperamentName: string
}): Promise<Response> => {
  const totalCount = await breedCountService()

  const {
    currentPage,
    nextPage,
    previousPage,
    totalPages
  } = pagination({ page, limit, totalCount })

  const breeds = await getAllBreedsService({ name, page: currentPage, limit: parseInt(limit, 10) || 10, sort, temperamentName })

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
