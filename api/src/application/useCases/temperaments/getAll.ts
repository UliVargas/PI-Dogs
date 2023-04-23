import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { findTemperamentByNameService, getAllTemperamentsService } from '../../../infrastructure/services/temperament.service'

export default async (name: string): Promise<TemperamentEntity[] | TemperamentEntity | null> => {
  let temperaments
  name
    ? temperaments = await findTemperamentByNameService(name)
    : temperaments = await getAllTemperamentsService()

  return temperaments
}
