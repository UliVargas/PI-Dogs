import { BreedEntity } from '../../../core/entities/breed.entity'
import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { getAllTemperamentsService } from '../../../infrastructure/repositories/sequelize'
import { getAllBreedsService } from '../../../infrastructure/repositories/sequelize/breed.repository'
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
  temperament
}: {
  name?: string,
  page: string,
  limit: string,
  sort: 'ASC' | 'DESC'
  temperament: string
}): Promise<Response> => {
  let breeds: BreedEntity[] = []
  let totalCount = 0

  if (temperament) {
    const resp: any = await getAllTemperamentsService({ page: Number(page), limit: parseInt(limit, 10) || 10, name: temperament })
    breeds = resp.temperaments?.flatMap((temperament: TemperamentEntity) => temperament.Breeds) ?? []
    totalCount = breeds.length
  } else {
    const resp = await getAllBreedsService({ name, page: Number(page), limit: parseInt(limit, 10) || 10, sort, temperament })
    breeds = resp.breeds
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
