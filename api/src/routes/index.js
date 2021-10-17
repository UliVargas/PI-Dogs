const { Router } = require('express');
const dogRouter = require("./dog");
const temperamentRouter = require("./temperament");
const dogsRouter = require("./dogs")
const router = Router();

router.use("/dog", dogRouter);
router.use("/temperament", temperamentRouter);
router.use("/dogs", dogsRouter);

module.exports = router;
