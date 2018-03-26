const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("router index");
})

module.exports = router;