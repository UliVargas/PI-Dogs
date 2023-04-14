import axios from 'axios'
import { BreedModel } from '../orm/sequelize/models/index.model'
import { env } from '../config/env'
import { BreedAPI } from '../interfaces/breed.interface'
import { breedAPIAdapter } from '../adapters/breed.adapter'
import { BreedEntity } from '../entities/breed.entity'

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
  const breedsDB: BreedEntity[] = (await BreedModel.findAll()).map(breed => breed.toJSON())

  const breeds = [
    ...breedsAPI,
    ...breedsDB
  ]

  if (name) {
    return breeds.filter(breed => breed.name.toLowerCase().includes(name))
  }

  return breeds
}

export const createBreedService = async (breedPayload: BreedEntity) => {
  const [breed, created] = await BreedModel.findOrCreate({
    where: {
      name: breedPayload.name
    },
    defaults: {
      ...breedPayload
    }
  })

  return {
    created,
    breed: breed.toJSON()
  }
}

export const findBreedByIdService = async (id: string) => {
  const breed = await findBreedByIdFromAPI(Number(id)).catch(() => null) ?? await BreedModel.findOne({ where: { id } }).catch(() => null)
  return breed
}
