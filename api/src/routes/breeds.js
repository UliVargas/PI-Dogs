const express = require('express')
const router = express.Router()

const { getBreeds, getBreedById, createBreed } = require('../controllers/dogs')

router.get('/', getBreeds)
router.get('/:id', getBreedById)
router.post('/', createBreed)

module.exports = router
