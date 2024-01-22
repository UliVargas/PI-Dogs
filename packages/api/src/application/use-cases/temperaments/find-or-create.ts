import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { Dependencies } from '../../../infrastructure/config/dependencies'

type CreateTemperament = (name: string) => Promise<TemperamentEntity>

export default (dependencies: Dependencies): CreateTemperament => (name) => {
  return dependencies.temperamentRepository.create(name)
}
