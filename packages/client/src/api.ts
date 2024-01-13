import { BreedEntity } from './app/interfaces/breed-entity.interface'
import { Response, ResponseOne } from './app/interfaces/response.interface'

interface BreedsProps { 
  page?: string, 
  limit?: string, 
  breedName?: string 
  sort?: string
}

export const api = {
  breed: {
    getBreedById: async (breedId: string) => {
      const breeds: ResponseOne<BreedEntity> = await fetch(`${process.env.API_BASE_URL}/breeds/${breedId}`)
        .then(data => data.json())
      return breeds
    },
    getBreeds: async ({ page = '1', limit = '9', breedName = '', sort = 'ASC' }: BreedsProps) => {
      const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds?page=${page}&limit=${limit}&name=${breedName}&sort=${sort}`)
        .then(data => data.json())
      return breeds
    }
  },
  temperament: {
    getBreeds: async ({ page = '1', limit = '9', breedName = '', sort = 'ASC' }: BreedsProps) => {
      const breeds: Response<BreedEntity[]> = await fetch(`${process.env.API_BASE_URL}/breeds?page=${page}&limit=${limit}&name=${breedName}&sort=${sort}`)
        .then(data => data.json())
      return breeds
    }
  }
}