const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'raiz do example 2!' });
});

module.exports = router;