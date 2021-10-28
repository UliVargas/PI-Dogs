const {Temperament} = require("../db")

async function postTemperamnets(req, res) {
    const {temperament} = req.body
        const [temp, create] = await Temperament.findOrCreate({
            where: {name: temperament}
        })
    res.json({data: temp})
}

module.exports = postTemperamnets;