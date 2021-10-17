const express = require("express");
const {postDog} = require("../controller/postDog");
const router = express.Router();


router.post("/", postDog);

module.exports = router;