import { NextFunction, Request, Response } from 'express'
import { GetAllBreeds, FindBreedById, CreateBreed } from '../../application/useCases/breeds'

export const getAllBreeds = async (req: Request, res: Response, next: NextFunction) => {
  res.req.body = await GetAllBreeds(req.query.name as string)
  next()
}

export const createBreed = async (req: Request, res: Response, next: NextFunction) => {
  const { breed, created } = await CreateBreed(req.body)
  let status = null
  !created
    ? status = 200
    : status = 201

  res.req.body = breed
  res.req.statusCode = status
  next()
}

export const findBreedById = async (req: Request, res: Response, next: NextFunction) => {
  const breed = await FindBreedById(req.params.breedId)

  if (!breed) {
    return res.status(404).json({})
  }

  res.req.body = breed
  next()
}
