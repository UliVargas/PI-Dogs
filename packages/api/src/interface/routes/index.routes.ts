import Router from 'express-promise-router'
import BreedsRouter from './breeds.routes'
import TemperamentsRouter from './temperament.routes'
import { handlerContext } from '../../infrastructure/utils/handlerContext'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => {
  const router = Router()
  const breedsRouter = BreedsRouter(dependencies)
  const temperamentsRouter = TemperamentsRouter(dependencies)

  router
    .use('/breeds', breedsRouter)
    .use('/temperaments', temperamentsRouter)
    .use(handlerContext)

  return router
}
