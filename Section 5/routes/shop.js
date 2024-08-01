const express = require('express');

const router = express.Router();

// get, post, etc use exact routes. use does not!
router.get('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>'); // allows us to attach a body of type any. from express js so you don't have to have a res.setHeader()
});

module.exports = router;