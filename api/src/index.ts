import app from './app'
import { env } from './config/env'
import sequelize from './orm/sequelize'
import { logger } from './utils/wingston'

sequelize
  .authenticate()
  .then(() => {
    logger.log('warn', 'Connection to the database has been established successfully.')
  })
  .catch((error) => {
    logger.error('Unable to connect to the database:', error)
  })

const PORT = env.PORT || 3001
app.listen(env.PORT, () => {
  logger.log('info', `The server is listening on port ${PORT}`)
})
