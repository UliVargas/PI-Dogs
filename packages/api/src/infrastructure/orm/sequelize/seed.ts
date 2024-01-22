import sequelize from '.'
import axios from 'axios'
import { BreedAPI } from '../../../core/interfaces/breed.interface'
import { env } from '../../config/env'
import { breedAPIAdapter } from '../../../interface/adapters/breed.adapter'
import { logger } from '../../utils/wingston'
import { BreedModel, BreedTemperamentModel, TemperamentModel } from './models/index.model'

export default async function Seed () {
  sequelize
    .authenticate()
    .then(() => {
      logger.log('warn', 'Connection to the database has been established successfully.')
    })
    .catch((error) => {
      logger.error('Unable to connect to the database:', error)
    })

  await TemperamentModel.destroy({ truncate: true, cascade: true })
  await BreedModel.destroy({ truncate: true, cascade: true })
  await BreedTemperamentModel.destroy({ truncate: true, cascade: true })

  const { data } = await axios.get<BreedAPI[]>(`${env.API_URL}?api_key=${env.API_KEY}`)

  const breeds = data.map(breed => breedAPIAdapter(breed))

  for (const breedData of breeds) {
    const breed = await BreedModel.create(breedData)

    for (const temperamentName of breedData.temperaments) {
      let temperament = await TemperamentModel.findOne({ where: { name: temperamentName } })

      if (!temperament) {
        temperament = await TemperamentModel.create({ name: temperamentName })
      }

      await BreedTemperamentModel.create({
        BreedId: breed.id,
        TemperamentId: temperament.id
      })
    }
  }
}

Seed()
