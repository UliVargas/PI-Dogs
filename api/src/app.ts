import express, { json } from 'express'
import morgan from 'morgan'
import router from './interface/routes/index.routes'

const app = express()

app.use(json({ limit: '50mb' }))
app.use(morgan('dev'))

app.use('/api', router)

export default app
