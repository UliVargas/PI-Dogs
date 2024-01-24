import { jest, describe, it, expect } from '@jest/globals'
import { CreateUseCase, FindAllUseCase, FindOneUseCase } from '../../src/application/use-cases/breeds'
import { breed } from '../mocks/breed'
import { dependencies } from '../dependencies'

describe('breedService', () => {
  describe('FindAll', () => {
    const findAllBreeds = FindAllUseCase(dependencies)
    it('Debería devolver un array con todas las razas que existan', async () => {
      dependencies.breedsRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.findAll>).mockResolvedValue({ data: [breed], count: 1 })
      const result = await findAllBreeds({
        limit: '10',
        page: '1',
        sort: 'ASC'
      })
      expect(dependencies.breedsRepository.findAll).toHaveBeenCalledWith({
        page: 1,
        limit: 10,
        sort: 'ASC'
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
      dependencies.breedsRepository.findAll = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.findAll>).mockResolvedValue({ data: [], count: 0 })
      const result = await findAllBreeds({
        limit: '10',
        page: '1',
        sort: 'ASC'
      })
      expect(dependencies.breedsRepository.findAll).toHaveBeenCalledWith({
        page: 1,
        limit: 10,
        sort: 'ASC'
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

  describe('FindOne', () => {
    const findOneUseCase = FindOneUseCase(dependencies)
    it('Debería obtener una raza por id', async () => {
      dependencies.breedsRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.findOne>).mockResolvedValue(breed)
      const result = await findOneUseCase(breed.id)
      expect(dependencies.breedsRepository.findOne).toHaveBeenCalledWith(breed.id)
      expect(result).toEqual(breed)
    })
    it('Debería retornar un objeto vacio si una raza no existe', async () => {
      dependencies.breedsRepository.findOne = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.findOne>).mockResolvedValue(null)
      const result = await findOneUseCase(breed.id)
      expect(dependencies.breedsRepository.findOne).toHaveBeenCalledWith(breed.id)
      expect(result).toEqual(null)
    })
  })

  describe('Create', () => {
    const createBreed = CreateUseCase(dependencies)
    it('Debería crear una nueva raza y retornarla', async () => {
      dependencies.breedsRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.create>).mockResolvedValue(breed)
      dependencies.temperamentRepository.create = (jest.fn() as jest.MockedFunction<typeof dependencies.temperamentRepository.create>).mockResolvedValue({ id: 'temp123', name: 'Happy' })
      dependencies.breedsRepository.addTemperamentToBreed = (jest.fn() as jest.MockedFunction<typeof dependencies.breedsRepository.addTemperamentToBreed>).mockResolvedValue({ BreedId: 'breed123', TemperamentId: 'temp123' })

      const result = await createBreed({ ...breed, Temperaments: ['Happy'] })

      expect(dependencies.breedsRepository.create).toHaveBeenCalledWith({ ...breed, Temperaments: ['Happy'] })
      expect(dependencies.temperamentRepository.create).toHaveBeenCalledWith('Happy')
      expect(dependencies.breedsRepository.addTemperamentToBreed).toHaveBeenCalledWith('breed123', 'temp123')
      expect(result).toEqual(breed)
    })
  })
})
