const { Router } = require("express");

const exampleRouter = require("../modules/example/example.routes");
const exampleRouter2 = require("../modules/example2/example2.routes");

const router = Router();

router.use('/example', exampleRouter);
router.use('/example2', exampleRouter2);

module.exports = router;

