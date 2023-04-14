import { Request, Response } from 'express'
import { createBreedService, findBreedByIdService, getAllBreedsService } from '../services/breed.service'

export const getAllBreeds = async (req: Request, res: Response) => {
  const breeds = await getAllBreedsService(req.query.name as string)
  res.status(200).json(breeds)
}

export const createBreed = async (req: Request, res: Response) => {
  const { breed, created } = await createBreedService(req.body)
  if (!created) return res.status(200).json(breed)
  res.status(201).json(breed)
}

export const findBreedById = async (req: Request, res: Response) => {
  const breed = await findBreedByIdService(req.params.breedId)

  if (!breed) {
    return res.status(404).json({})
  }

  res.status(200).json(breed)
}
