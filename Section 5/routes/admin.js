const path = require('path');
const express = require('express');

const router = express.Router();


// bioth can have the same route since one is get and one is post
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // do not call next() here to prevent '/' from also running if /add-product runs 
});

// app.post is like app.use but only fires for post requests. Works for other HTTP request types
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;