import { NextFunction, Request, Response } from 'express'
import { FindOrCreateTemperament, GetAllTemperaments } from '../../application/useCases/temperaments'

export const getAllTemperaments = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.query as { name: string }

  res.req.body = await GetAllTemperaments(name)
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
