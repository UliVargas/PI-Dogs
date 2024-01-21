import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { getAllTemperamentsService } from '../../../infrastructure/repositories/sequelize/temperament.repository'
import { pagination } from '../../../infrastructure/utils/pagination'

interface Response {
  temperaments: TemperamentEntity[]
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
  limit = '10'
}: {
  page: string,
  limit: string
  name?: string,
}): Promise<Response> => {
  const { temperaments, count: totalCount } = await getAllTemperamentsService({ name, page: Number(page), limit: parseInt(limit, 10) || 10 })
  const {
    totalPages,
    previousPage,
    currentPage,
    nextPage
  } = pagination({
    totalCount,
    page,
    limit
  })
  return {
    pagination: {
      totalCount,
      previousPage,
      currentPage,
      nextPage,
      totalPages
    },
    temperaments
  }
}
