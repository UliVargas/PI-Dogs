import express, { json } from 'express'
import morgan from 'morgan'
import RouterInit from '../../adapters/routes/index.routes'
import { Dependencies } from '../config/dependencies'

export default async (dependencies: Dependencies) => {
  const router = RouterInit(dependencies)
  const app = express()

  app.use(json({ limit: '50mb' }))
  app.use(morgan('dev'))
  app.use('/api', router)

  return app
}
