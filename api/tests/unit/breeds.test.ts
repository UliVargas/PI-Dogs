import { jest, describe, it, expect } from '@jest/globals'
import { GetAllBreeds, FindBreedById, CreateBreed } from '../../src/application/use-cases/breeds'
import { breedCountService, getAllBreedsService, findBreedByIdService, createBreedService } from '../../src/infrastructure/repositories/sequelize/breed.repository'
import { breed } from '../mocks/breed'

jest.mock('../../src/infrastructure/repositories/sequelize/breed.repository')

describe('breedService', () => {
  describe('GetAll', () => {
    it('Debería devolver un array con todas las razas que existan', async () => {
      const breedCountMock = (breedCountService as jest.MockedFunction<typeof breedCountService>).mockResolvedValue(1)
      const getAllBreedsMock = (getAllBreedsService as jest.MockedFunction<typeof getAllBreedsService>).mockResolvedValue([breed])

      const result = await GetAllBreeds({
        limit: '10',
        page: '1'
      })

      expect(breedCountMock).toHaveBeenCalled()
      expect(getAllBreedsMock).toHaveBeenCalledWith({
        page: 1,
        limit: 10
      })
      expect(result).toEqual({
        pagination: {
          totalCount: 1,
          previousPage: null,
          currentPage: 1,
          nextPage: null,
          totalPages: 1
        },
        breeds: [breed]
      })
    })

    it('Debería devolver un array vacío si no hay razas', async () => {
      const breedCountMock = (breedCountService as jest.MockedFunction<typeof breedCountService>).mockResolvedValue(0)
      const getAllBreedsMock = (getAllBreedsService as jest.MockedFunction<typeof getAllBreedsService>).mockResolvedValue([])

      const result = await GetAllBreeds({
        limit: '10',
        page: '1'
      })

      expect(breedCountMock).toHaveBeenCalled()
      expect(getAllBreedsMock).toHaveBeenCalledWith({
        page: 1,
        limit: 10
      })
      expect(result).toEqual({
        pagination: {
          totalCount: 0,
          previousPage: null,
          currentPage: 1,
          nextPage: null,
          totalPages: 0
        },
        breeds: []
      })
    })
  })

  describe('GetOne', () => {
    it('Debería obtener una raza por id', async () => {
      const findBreedMock = (findBreedByIdService as jest.MockedFunction<typeof findBreedByIdService>).mockResolvedValue(breed)

      const result = await FindBreedById(breed.id)

      expect(findBreedMock).toHaveBeenCalledWith(breed.id)
      expect(result).toEqual(breed)
    })
    it('Debería retornar un objeto vacio si una raza no existe', async () => {
      const findBreedMock = (findBreedByIdService as jest.MockedFunction<typeof findBreedByIdService>).mockResolvedValue({})

      const result = await FindBreedById(breed.id)

      expect(findBreedMock).toHaveBeenCalledWith(breed.id)
      expect(result).toEqual({})
    })
  })

  describe('Create', () => {
    it('Debería crear una nueva raza y retornarla', async () => {
      const createBreedMock = (createBreedService as jest.MockedFunction<typeof createBreedService>).mockResolvedValue(breed)

      const result = await CreateBreed(breed)

      expect(createBreedMock).toHaveBeenCalledWith(breed)
      expect(result).toEqual(breed)
    })
  })
})
