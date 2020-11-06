let express = require('express');
let router = express.Router();

// render the Index page
module.exports.renderIndexPage = (req, res, next) => {
    res.render('index', { title: 'Express' });
}