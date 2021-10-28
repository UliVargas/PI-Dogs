const express = require("express");
const router = express.Router();
const getTemperament = require('../controller/GetTemperament');
const postTemperamnets = require("../controller/postTemperaments");

router.get("/", getTemperament);

router.post("/", postTemperamnets)

module.exports = router;