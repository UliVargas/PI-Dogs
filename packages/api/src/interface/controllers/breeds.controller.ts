import { NextFunction, Request, Response } from 'express'
import { GetAllBreeds, FindBreedById, CreateBreed } from '../../application/use-cases/breeds'

export const getAllBreeds = async (req: Request, res: Response, next: NextFunction) => {
  console.log({ req: req.query })

  const { name, page, limit, sort, temperamentName } = req.query as { name: string, page: string, limit: string, sort: 'ASC' | 'DESC', temperamentName: string }
  res.req.body = await GetAllBreeds({ name, page, limit, sort, temperamentName })
  next()
}

export const createBreed = async (req: Request, res: Response, next: NextFunction) => {
  res.req.body = await CreateBreed(req.body)
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
