let express = require("express");
let router = express.Router();
let mongoose = require('mongoose');

let Survey = require('../models/survey');

module.exports.displaySurveyList = (req, res, next)=>{


    //check if there is an error
    Survey.find((err, surveyList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //return console.log(ContactList);
            //pass throught the data
            /*
            res.render('index', 
            {title: 'Survey List', 
            SurveyList: SurveyList});*/
            res.json(surveyList);
        }
    // sorting the buisness contact list in alphabetical order
    });
}

module.exports.displayAddPage = (req, res, next)=>{
    res.json({success: true, msg: 'Succesfully displayed Add page'});
}