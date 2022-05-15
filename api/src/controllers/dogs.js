const fetchApi = require('../utils/fetchApi')
const CleanCode = require('../utils/CleanCodeClass')
const FetchDB = require('../utils/fetchDB')

const cleanCode = new CleanCode()
const fetchDB = new FetchDB()

const getBreeds = async (req, res) => {
  const { name } = req.query
  let { data } = await fetchApi()
  const dataDB = await fetchDB.getBreeds()
  data = [...data, ...dataDB]
  const breeds = cleanCode.breeds(data, name)
  const temperaments = cleanCode.temperaments(data)
  fetchDB.createTemperament(temperaments)
  res.send(breeds)
}

const getBreedById = async (req, res) => {
  const { id } = req.params
  const { data } = await fetchApi()
  const breedFound = data.find(breed => breed.id.toString() === id)
  const breed = cleanCode.breedById(breedFound)
  res.send(breed)
}

const createBreed = async (req, res) => {
  const breed = fetchDB.createBreed(req.body)
  res.send('Breed Created!')
}

module.exports = {
  getBreeds,
  getBreedById,
  createBreed
}
