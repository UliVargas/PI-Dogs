import { BreedRepository } from '../../ports/repositories/breed.repository'
import { TemperamentRepository } from '../../ports/repositories/temperament.repository'
import { BreedSequelizeRepository } from '../repositories/sequelize'
import TemperamentSequelizeRepository from '../repositories/sequelize/temperament.repository'

export interface Dependencies {
  breedsRepository: BreedRepository
  temperamentRepository: TemperamentRepository
}

export default async (): Promise<Dependencies> => {
  const breedsRepository: BreedRepository = new BreedSequelizeRepository()
  const temperamentRepository: TemperamentRepository = new TemperamentSequelizeRepository()

  return {
    breedsRepository,
    temperamentRepository
  }
}
