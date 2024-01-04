import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { getAllTemperamentsService, temperamentCountService } from '../../../infrastructure/repositories/sequelize/temperament.repository'
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
}: { name: string,
  page: string,
  limit: string
}): Promise<Response> => {
  const totalCount = await temperamentCountService()
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
    temperaments: await getAllTemperamentsService({ name, page: currentPage, limit: parseInt(limit, 10) || 10 })
  }
}
