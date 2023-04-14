import { Request, Response } from 'express'

export const getAllTemperaments = (req: Request, res: Response) => {
  res.json({
    message: 'Temperaments'
  })
}
