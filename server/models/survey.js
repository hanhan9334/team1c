const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    userID: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    questions: [{
        question: {
            type: {
                type: String
            },
            questionBody: {
                type: String,
                required: true
            },
            anwsers: [{
                anwser: {
                    type: String
                }
            }]
        }
    }]
})

surveySchema.methods.getSurveyResult = async () => {

}

const Survey = mongoose.model('survey', surveySchema);

module.exports = Survey;
