import sequelize from '.'
import './models/index.model'
import { env } from '../../config/env'

/*
  ! Warning:
  The next line of code will modify the database's table's columns to match each model definition.
  To execute it, run either of the following commands:
   > "npm run alterdb" for dev
   > "npm run alterdb:prod" for production
  ! Use carefully { force: true }, as this will drop all the tables and their existing data.
  ! Never use it when executing alterdb:prod.
*/

const executionAllowed = !(env.NODE_ENV === 'production')

const execute = async () => {
  if (executionAllowed) {
    await sequelize.sync({ alter: true })
      .catch(error => {
        console.log(error)
        process.exit(1)
      })
  } else {
    console.log('Production modifications are not allowed by default')
    console.log('Please, comment executionAllowed flag if you really want to alter production database')
  }
  process.exit(0)
}

execute()
