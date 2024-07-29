const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// registers a middleware function that will parse the body of the request. Automatically calls next() to move to next middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">Add Product</button>    
        </form>`
    );
    // do not call next() here to prevent '/' from also running if /add-product runs 
});

// app.post is like app.use but only fires for post requests. Works for other HTTP request types
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>'); // allows us to attach a body of type any. from express js so you don't have to have a res.setHeader()
});

app.listen(3000);
