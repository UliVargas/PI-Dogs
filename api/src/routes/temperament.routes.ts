import { Router } from 'express'
import { getAllTemperaments } from '../controllers/temperaments.controller'

const router = Router()

router.get('/', getAllTemperaments)

export default router
