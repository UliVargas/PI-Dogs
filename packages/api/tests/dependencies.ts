import { BreedEntity } from '../src/domain/entities/breed.entity'
import { TemperamentEntity } from '../src/domain/entities/temperament.entity'
import { Dependencies } from '../src/infrastructure/config/dependencies'
import BreedTemperament from '../src/infrastructure/orm/sequelize/models/breed-temperament.model'
export const dependencies: Dependencies = {
  breedsRepository: {
    addTemperamentToBreed: function (breedId: string, temperamentId: string): Promise<BreedTemperament> {
      throw new Error('Function not implemented.')
    },
    create: (payload: BreedEntity): Promise<BreedEntity> => {
      throw new Error('Function not implemented.')
    },
    findAll: (payload: { page: number; limit: number; sort: 'ASC' | 'DESC'; name?: string | undefined; temperament?: string | undefined }): Promise<{ data: BreedEntity[]; count: number }> => {
      throw new Error('Function not implemented.')
    },
    findOne: (payload: string): Promise<BreedEntity | null> => {
      throw new Error('Function not implemented.')
    }
  },
  temperamentRepository: {
    create: (payload: string): Promise<TemperamentEntity> => {
      throw new Error('Function not implemented.')
    },
    findAll: (payload: { page: number; limit: number; sort: 'ASC' | 'DESC'; name?: string | undefined; temperament?: string | undefined }): Promise<{ data: TemperamentEntity[]; count: number }> => {
      throw new Error('Function not implemented.')
    },
    findOne: (payload: string): Promise<TemperamentEntity | null> => {
      throw new Error('Function not implemented.')
    }
  }
}
