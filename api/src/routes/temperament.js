const express = require("express");
const router = express.Router();
const getTemperament = require('../controller/GetTemperament')

router.get("/", getTemperament);

module.exports = router;