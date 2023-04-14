import { Router } from 'express'
import breedsRouter from './breeds.routes'
import temperamentsRouter from './temperament.routes'

const router = Router()

router.use('/breeds', breedsRouter)
router.use('/temperaments', temperamentsRouter)

export default router
