import { Request, Response } from 'express'
import { findOrCreateTemperamentService, findTemperamentByNameService, getAllTemperamentsService } from '../services/temperament.service'

export const getAllTemperaments = async (req: Request, res: Response) => {
  const { name } = req.query
  let temperaments = null
  name
    ? temperaments = await findTemperamentByNameService(name as string)
    : temperaments = await getAllTemperamentsService()
  res.status(200).json(temperaments)
}

export const createTemperament = async (req: Request, res: Response) => {
  const { temperament, created } = await findOrCreateTemperamentService(req.body.name)
  let status = null
  !created
    ? status = 200
    : status = 201
  res.status(status).json(temperament)
}
