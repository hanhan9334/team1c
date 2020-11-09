let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
    name: String,
    email: String,
    published: String
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);