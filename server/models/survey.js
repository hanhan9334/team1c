const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    questions: [{
        question: [{
            type: {
                tpyeCode: {
                    type: Int16Array,
                    required: true
                },
                typeName: {
                    type: String
                }
            },
            questionBody: {
                type: String,
                required: true
            },
            anwsers: [{
                anwser: [{
                    num: {
                        type: Int16Array,
                        required: true
                    },
                    body: {
                        type: String,
                        required
                    }
                }]
            }],
            selections: [{
                selection: {
                    type: Int16Array,
                    required: true
                }
            }]
        }]
    }]
})

surveySchema.methods.getSurveyResult = async () => {

}

const Survey= mongoose.model('survey', surveySchema);

module.exports = Survey;
