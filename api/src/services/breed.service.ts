import axios from 'axios'
import { BreedModel, BreedTemperamentModel, TemperamentModel } from '../orm/sequelize/models/index.model'
import { env } from '../config/env'
import { BreedAPI } from '../interfaces/breed.interface'
import { breedAPIAdapter, breedDBAdapter } from '../adapters/breed.adapter'
import { BreedEntity } from '../entities/breed.entity'
import { findOrCreateTemperamentService } from './temperament.service'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

export const getAllBreedsFromAPI = async (): Promise<BreedEntity[]> => {
  const { data } = await axios.get<BreedAPI[]>(`${env.API_URL}?api_key=${env.API_KEY}`)
  return data.map(breed => breedAPIAdapter(breed))
}

export const findBreedByIdFromAPI = async (id: number): Promise<BreedEntity | null> => {
  const { data } = await axios.get<BreedAPI[]>(`${env.API_URL}?api_key=${env.API_KEY}`)
  const breed = data.find(breed => breed.id === id)
  if (breed) {
    return breedAPIAdapter(breed as BreedAPI)
  }
  return null
}

export const getAllBreedsService = async (name?: string): Promise<BreedEntity[] | BreedEntity> => {
  const breedsAPI = await getAllBreedsFromAPI()
  const breedsDB: BreedEntity[] = (await BreedModel.findAll({
    include: {
      model: TemperamentModel,
      attributes: ['name']
    }
  })).map(breed => breedDBAdapter(breed.toJSON()))

  const breeds = [
    ...breedsAPI,
    ...breedsDB
  ]

  for (const breed of breedsAPI) {
    breed.Temperaments.map(async (temperament) => {
      await findOrCreateTemperamentService(temperament)
    })
  }

  if (name) {
    return breeds.filter(breed => breed.name.toLowerCase().includes(name))
  }

  return breeds
}

export const createBreedService = async (breedPayload: BreedEntity) => {
  const [breed, created] = await BreedModel.findOrCreate({
    where: {
      name: capitalizeFirstLetter(breedPayload.name)
    },
    defaults: {
      ...breedPayload
    }
  })

  if (breedPayload.Temperaments.length > 0) {
    breedPayload.Temperaments.forEach(async (temperament) => {
      await addTemperamentToBreed(temperament, breed.id)
    })
  }

  return {
    created,
    breed: breed.toJSON()
  }
}

export const findBreedByIdService = async (id: string) => {
  const breed = await findBreedByIdFromAPI(Number(id))
    .catch(() => null) ??
  await BreedModel.findOne({
    where: {
      id
    },
    include: {
      model: TemperamentModel,
      attributes: ['name']
    }
  })
    .then(breed => breedDBAdapter(breed?.toJSON()))
    .catch(() => null)

  return breed
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
