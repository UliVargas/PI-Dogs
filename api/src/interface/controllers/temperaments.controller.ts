import { NextFunction, Request, Response } from 'express'
import { FindOrCreateTemperament, GetAllTemperaments } from '../../application/use-cases/temperaments'

export const getAllTemperaments = async (req: Request, res: Response, next: NextFunction) => {
  const { name, page, limit } = req.query as { name: string, page: string, limit: string }
  res.req.body = await GetAllTemperaments({ name, page, limit })
  next()
}

export const createTemperament = async (req: Request, res: Response, next: NextFunction) => {
  const { temperament, created } = await FindOrCreateTemperament(req.body.name)

  let status = null
  !created
    ? status = 200
    : status = 201

  res.req.body = temperament
  res.req.statusCode = status
  next()
}
