const { default: axios } = require('axios')

const fetchApi = async () => {
  return await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${process.env.API_KEY}`)
}

module.exports = fetchApi
