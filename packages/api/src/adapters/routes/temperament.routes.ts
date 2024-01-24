import Router from 'express-promise-router'
import TemperamentController from '../controllers/temperaments.controller'
import { Dependencies } from '../../infrastructure/config/dependencies'

export default (dependencies: Dependencies) => {
  const router = Router()
  const temperamentController = TemperamentController(dependencies)

  router
    .get('/',
      temperamentController.findAll
    )
    .post('/',
      temperamentController.create
    )

  return router
}
