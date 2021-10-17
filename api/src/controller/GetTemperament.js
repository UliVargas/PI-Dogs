const { Temperament } = require("../db");

async function getTemperament(req, res) {
    const temperament = await Temperament.findAll();
    res.json(temperament);
}

module.exports = getTemperament;