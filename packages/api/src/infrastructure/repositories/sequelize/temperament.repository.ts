import { Op, WhereOptions } from 'sequelize'
import { TemperamentEntity } from '../../../core/entities/temperament.entity'
import { BreedModel, TemperamentModel } from '../../orm/sequelize/models/index.model'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { TemperamentRepository } from '../../../core/repositories/temperament.repository'

class TemperamentSequelizeRepository implements TemperamentRepository {
  async findAll ({
    name,
    page,
    limit,
    sort = 'ASC'
  }: {
    name?: string,
    page: number,
    limit: number,
    sort: 'ASC' | 'DESC'
  }): Promise<{ data: TemperamentEntity[], count: number }> {
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
      data: temperaments.map(temperament => temperament.toJSON()),
      count
    }
  }

  async create (payload: string): Promise<TemperamentEntity> {
    const [temperament] = await TemperamentModel.findOrCreate({
      where: {
        name: capitalizeFirstLetter(payload)
      }
    })

    return temperament
  }

  async findOne (payload: string): Promise<TemperamentEntity | null> {
    return await TemperamentModel.findOne({
      where: {
        id: payload
      }
    })
  }
}

export default TemperamentSequelizeRepository
