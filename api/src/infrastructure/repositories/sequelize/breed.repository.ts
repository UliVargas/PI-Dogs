import { BreedModel, BreedTemperamentModel, TemperamentModel } from '../../orm/sequelize/models/index.model'
import { breedDBAdapter } from '../../adapters/breed.adapter'
import { BreedEntity } from '../../../core/entities/breed.entity'
import { findOrCreateTemperamentService } from './temperament.repository'
import { capitalizeFirstLetter } from '../../orm/sequelize/utils/capitalizeFirstLetter'
import { Op } from 'sequelize'

export const getAllBreedsService = async ({
  name,
  page,
  limit,
  sort = 'ASC'
}: {
  name?: string,
  page: number,
  limit: number,
  sort: 'ASC' | 'DESC'
}): Promise<BreedEntity[]> => {
  let where = {}
  if (name) {
    where = {
      name: {
        [Op.iLike]: `%${name}%`
      }
    }
  }

  return await BreedModel.findAll({
    include: {
      model: TemperamentModel,
      attributes: ['name']
    },
    where,
    offset: (page - 1) * limit,
    limit,
    order: [['name', sort]]
  }).then(data => data.map(breed => breedDBAdapter(breed.toJSON())))
}

export const createBreedService = async (breedPayload: BreedEntity) => {
  const breed = await BreedModel.create({
    ...breedPayload,
    name: capitalizeFirstLetter(breedPayload.name)
  })
  if (breedPayload.Temperaments.length > 0) {
    breedPayload.Temperaments.forEach(async (temperament) => {
      await addTemperamentToBreed(temperament, breed.id)
    })
  }
  return breed.toJSON()
}

export const findBreedByIdService = async (id: string) => {
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

export const addTemperamentToBreed = async (temperamentName: string, breedId: string) => {
  const { temperament } = await findOrCreateTemperamentService(temperamentName)
  const [breedTemperament] = await BreedTemperamentModel.findOrCreate({
    where: {
      BreedId: breedId,
      TemperamentId: temperament.id
    }
  })
  return breedTemperament
}

export const breedCountService = async (): Promise<number> => {
  return BreedModel.count()
}
