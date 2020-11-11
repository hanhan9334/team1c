var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
let surveyController = require('../controllers/survey');

/* GET home page. */
router.get('/', indexController.renderIndexPage);
router.get('/survey-list', surveyController.displaySurveyList);

module.exports = router;
