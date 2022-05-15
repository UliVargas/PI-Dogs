const { Router } = require('express')
const router = Router()

const breedsRouter = require('./breeds')
const temperamentsRouter = require('./temperaments')

router.use('/breeds', breedsRouter)
router.use('/temperaments', temperamentsRouter)

module.exports = router
