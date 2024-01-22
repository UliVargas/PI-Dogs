import app from './app'
import { env } from '../config/env'
import { logger } from '../utils/wingston'
import dependencies from '../config/dependencies'
import http from 'http'

function normalizePort (val: any) {
  const port = parseInt(val, 10)

  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}

const PORT = normalizePort(env.PORT || 3001)

function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      return process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      return process.exit(1)
    default:
      throw error
  }
}

dependencies().then(dependency => {
  app(dependency).then(app => {
    function onListening () {
      const addr: any = server.address()
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      logger.info(`Running ${env.PROJECT_NAME} on ${bind}`)
    }

    app.set('port', PORT)

    const server = http.createServer(app)

    server.listen(PORT)
    server.on('error', onError)
    server.on('listening', onListening)
  })
})
