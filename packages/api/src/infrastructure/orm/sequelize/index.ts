import { Sequelize } from 'sequelize'
import { config } from './config'

const {
  database,
  username,
  password,
  ...rest
} = config

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: require
    },
    ...rest
  }
)

export default sequelize
