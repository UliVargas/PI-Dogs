import { BreedEntity } from './app/interfaces/breed-entity.interface'
import { Response, ResponseOne } from './app/interfaces/response.interface'
import { TemperamentEntity } from './app/interfaces/temperament-entity.interface'

interface BreedsProps {
  page: string,
  limit: string,
  breedName: string
  sort: string
  temperament: string
}

export const api = {
  breed: {
    getBreedById: async (breedId: string) => {
      const breeds: ResponseOne<BreedEntity> = await fetch(`${process.env.API_BASE_URL}/breeds/${breedId}`)
        .then(data => data.json())
      return breeds
    },
    getBreeds: async ({ page = '1', limit = '9', breedName = '', sort = 'ASC', temperament = '' }: Partial<BreedsProps>) => {
      const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds?page=${page}&limit=${limit}&name=${breedName}&sort=${sort}&temperamentName=${temperament}`, {
        cache: 'no-store'
      })
        .then(async data => data.json())

      return breeds
    }
  },
  temperament: {
    getTemperaments: async () => {
      const temperaments: Response<TemperamentEntity[]> = await fetch(`${process.env.API_BASE_URL}/temperaments`)
        .then(data => data.json())
      return temperaments
    }
  }
}