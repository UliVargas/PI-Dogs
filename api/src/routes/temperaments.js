const express = require('express')
const router = express.Router()
const { getTemperament, postTemperaments } = require('../controllers/temperaments')

router.get('/', getTemperament)
router.post('/', postTemperaments)

module.exports = router
