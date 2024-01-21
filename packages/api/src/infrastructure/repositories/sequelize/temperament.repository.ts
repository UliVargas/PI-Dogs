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
}): Promise<{ temperaments: TemperamentEntity[], count: number }> => {
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

  const count = await TemperamentModel.count({
    where
  })

  return {
    temperaments: temperaments.map(temperament => temperament.toJSON()),
    count
  }
}

export const findOrCreateTemperamentService = async (name: string): Promise<{ created: boolean, temperament: Omit<TemperamentEntity, 'Breeds'> }> => {
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
