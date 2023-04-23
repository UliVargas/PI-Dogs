import { Router } from 'express'
import breedsRouter from './breeds.routes'
import temperamentsRouter from './temperament.routes'
import { handlerContext } from '../../infrastructure/orm/sequelize/utils/handlerContext'

const router = Router()

router
  .use('/breeds', breedsRouter)
  .use('/temperaments', temperamentsRouter)
  .use(handlerContext)

export default router
