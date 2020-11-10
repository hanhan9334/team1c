<<<<<<< HEAD
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
=======
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
>>>>>>> 988cbe5c29ec7e79d43625d08bcdc02768b001a5
