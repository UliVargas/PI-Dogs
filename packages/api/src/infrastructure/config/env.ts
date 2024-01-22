import dotenv from 'dotenv'
dotenv.config()

export const env = {
  API_KEY: process.env.API_KEY,
  API_URL: 'https://api.thedogapi.com/v1/breeds',
  NODE_ENV: process.env.NODE_ENV,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
  PROJECT_NAME: 'DogsApp'
}
