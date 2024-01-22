import Router from 'express-promise-router'
import BreedControllers from '../controllers/breeds.controller'
import { Dependencies } from '../../infrastructure/config/dependencies'

const router = Router()
export default (dependencies: Dependencies) => {
  const breedControllers = BreedControllers(dependencies)

  router
    .get('/',
      breedControllers.findAll
    )
    .post('/',
      breedControllers.create
    )
    .get('/:breedId',
      breedControllers.findOne
    )

  return router
}
