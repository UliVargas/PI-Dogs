const FetchDB = require('../utils/fetchDB')

const fetchDB = new FetchDB()

const postTemperaments = async (req, res) => {
  const { temperaments } = req.body
  await fetchDB.createTemperament(temperaments)
  res.send('Temperament Saved')
}

const getTemperament = async (req, res) => {
  const temperament = await fetchDB.getTemperaments()
  res.send(temperament)
}

module.exports = {
  getTemperament,
  postTemperaments
}
