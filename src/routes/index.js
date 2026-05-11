const { Router } = require("express");

const exampleRouter = require("../modules/example/example.routes");
const exampleRouter2 = require("../modules/example2/example2.routes");

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/form', (req, res) => res.render('form'));

router.post('/register', (req, res) => {
    const { username } = req.body;
    console.log(username);
    res.redirect('/form');
});

router.use('/example', exampleRouter);
router.use('/example2', exampleRouter2);

module.exports = router;

