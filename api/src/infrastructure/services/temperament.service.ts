import { TemperamentEntity } from '../../core/entities/temperament.entity'
import { TemperamentModel } from '../orm/sequelize/models/index.model'
import { capitalizeFirstLetter } from '../orm/sequelize/utils/capitalizeFirstLetter'

export const getAllTemperamentsService = async (): Promise<TemperamentEntity[]> => {
  const temperaments = await TemperamentModel.findAll()
  return temperaments.map(temperament => temperament.toJSON())
}

export const findTemperamentByNameService = async (name: string): Promise<TemperamentEntity | null> => {
  const temperament = await TemperamentModel.findOne({
    where: {
      name
    }
  })

  return temperament
}

export const findOrCreateTemperamentService = async (name: string): Promise<{created: boolean, temperament: TemperamentEntity}> => {
  const [temperament, created] = await TemperamentModel.findOrCreate({
    where: {
      name: capitalizeFirstLetter(name)
    }
  })

  return {
    created,
    temperament
  }
}
