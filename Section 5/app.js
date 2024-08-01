const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// registers a middleware function that will parse the body of the request. Automatically calls next() to move to next middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

// catch all for the error page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);


