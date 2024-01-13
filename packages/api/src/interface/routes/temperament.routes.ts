import { Router } from 'express'
import { createTemperament, getAllTemperaments } from '../controllers/temperaments.controller'

const router = Router()

router
  .get('/',
    getAllTemperaments
  )
  .post('/',
    createTemperament
  )

export default router
