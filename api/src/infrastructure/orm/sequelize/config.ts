import { env } from '../../config/env'
import { logger } from './utils/wingston'

const {
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_HOST
} = env

export const config = {
  logging: (msg: string) => logger.log('info', msg),
  database: DB_NAME ?? '',
  username: DB_USER ?? '',
  password: DB_PASSWORD ?? '',
  host: DB_HOST ?? ''
}
