const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    const errorTest = true;
    if (errorTest) throw new Error('Middleware de erro, está tratando o erro corretamente');
});

module.exports = router;