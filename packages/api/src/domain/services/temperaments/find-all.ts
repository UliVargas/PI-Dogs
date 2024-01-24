import { TemperamentEntity } from '../../entities/temperament.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'
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

type FindAllTemperaments = ({
  name,
  page,
  limit
}: {
  page: string,
  limit: string
  name?: string,
}) => Promise<Response>

export default (dependencies: Dependencies): FindAllTemperaments => async ({
  name,
  page = '1',
  limit = '10'
}) => {
  const { data, count: totalCount } = await dependencies.temperamentRepository.findAll({ name, page: Number(page), sort: 'ASC', limit: parseInt(limit, 10) || 10 })
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
    temperaments: data
  }
}
