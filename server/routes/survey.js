let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let surveyController = require('../controllers/survey');

// api: display all survey list
router.get('/list', surveyController.displaySurveyList);

// api: add new survey
router.post('/add', surveyController.createSurvey);

// api: display one survey
router.get('/detail/:id', surveyController.viewSurvey);

// api: update the edited survey
router.post('/edit/:id', surveyController.editSurvey);

// api: delete a survey
router.get('/del/:id', surveyController.deleteSurvey);

module.exports = router;