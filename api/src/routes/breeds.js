const express = require('express')
const router = express.Router()

const { getBreeds, getBreedById, createBreed } = require('../controllers/breeds')

router.get('/', getBreeds)
router.get('/:id', getBreedById)
router.post('/', createBreed)

module.exports = router
