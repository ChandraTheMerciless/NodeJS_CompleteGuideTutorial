const path = require('path');
const express = require('express');

const router = express.Router();

// get, post, etc use exact routes. use does not!
router.get('/', (req, res, next) => {
    // paths to html templates need to be absolute paths, so we need to use the path.join utility to create that
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;