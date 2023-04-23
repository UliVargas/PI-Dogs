import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { findOrCreateTemperamentService } from '../../../infrastructure/services/temperament.service'

interface Response {
  created: boolean
  temperament: TemperamentEntity
}

export default (name: string): Promise<Response> => {
  return findOrCreateTemperamentService(name)
}
