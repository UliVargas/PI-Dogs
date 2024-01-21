import { Op, WhereOptions } from 'sequelize'
import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { BreedModel, TemperamentModel } from '../../orm/sequelize/models/index.model'
import { capitalizeFirstLetter } from '../../orm/sequelize/utils/capitalizeFirstLetter'

export const getAllTemperamentsService = async ({
  name
}: {
  page: number,
  limit: number
  name?: string,
}): Promise<TemperamentEntity[]> => {
  let where: WhereOptions = {}

  if (name) {
    where = {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  }

  const temperaments = await TemperamentModel.findAll({
    where,
    include: {
      model: BreedModel,
      through: { attributes: [] }
    }
  })
  return temperaments.map(temperament => temperament.toJSON())
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

export const temperamentCountService = () => {
  return TemperamentModel.count()
}
