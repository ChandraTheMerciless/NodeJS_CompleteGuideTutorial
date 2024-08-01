const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">Add Product</button>    
        </form>`
    );
    // do not call next() here to prevent '/' from also running if /add-product runs 
});

// app.post is like app.use but only fires for post requests. Works for other HTTP request types
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;