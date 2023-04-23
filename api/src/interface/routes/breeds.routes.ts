import { Router } from 'express'
import { createBreed, findBreedById, getAllBreeds } from '../controllers/breeds.controller'

const router = Router()

router
  .get('/',
    getAllBreeds
  )
  .post('/',
    createBreed
  )
  .get('/:breedId',
    findBreedById
  )

export default router
