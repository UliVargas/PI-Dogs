const express = require("express");
const router = express.Router();
const {getDogs, getDogsId} = require('../controller/GetDogs');


router.get("/", getDogs);
router.get("/:id", getDogsId);

module.exports = router;