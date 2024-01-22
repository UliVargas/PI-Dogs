import { BreedModel, BreedTemperamentModel, TemperamentModel } from '../../orm/sequelize/models/index.model'
import { breedDBAdapter } from '../../../interface/adapters/breed.adapter'
import { BreedEntity } from '../../../core/entities/breed.entity'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { Op } from 'sequelize'
import { BreedRepository } from '../../../core/repositories/breed.repository'
import { CreateBreed } from '../../../core/interfaces/breed.interface'
import BreedTemperament from '../../orm/sequelize/models/breed-temperament.model'
import TemperamentSequelizeRepository from './temperament.repository'

const temperamentRepository = new TemperamentSequelizeRepository()
class BreedSequelizeRepository implements BreedRepository {
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
    temperament: string
  }): Promise<{ data: BreedEntity[], count: number }> {
    let where = {}
    if (name) {
      where = {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    }

    const breeds = await BreedModel.findAll({
      where,
      offset: (page - 1) * limit,
      limit,
      order: [['name', sort]],
      include: {
        model: TemperamentModel,
        order: [['name', 'ASC']],
        attributes: ['name']
      }
    })

    const count = await BreedModel.count({
      where
    })

    return {
      data: breeds.map(breed => breedDBAdapter(breed.toJSON())),
      count
    }
  }

  async create (payload: CreateBreed): Promise<BreedEntity> {
    const breed = await BreedModel.create({
      ...payload,
      name: capitalizeFirstLetter(payload.name)
    })

    if (payload.Temperaments.length > 0) {
      payload.Temperaments.forEach(async (temperament) => {
        await this.addTemperamentToBreed(temperament, breed.id)
      })
    }
    return breed.toJSON()
  }

  async findOne (id: string): Promise<BreedEntity> {
    return await BreedModel.findOne({
      where: {
        id
      },
      include: {
        model: TemperamentModel,
        attributes: ['name']
      }
    }).then(breed => breedDBAdapter(breed?.toJSON()))
  }

  async addTemperamentToBreed (temperamentName: string, breedId: string): Promise<BreedTemperament> {
    const temperament = await temperamentRepository.create(temperamentName)
    const [breedTemperament] = await BreedTemperamentModel.findOrCreate({
      where: {
        BreedId: breedId,
        TemperamentId: temperament.id
      }
    })
    return breedTemperament
  }
}

export default BreedSequelizeRepository
