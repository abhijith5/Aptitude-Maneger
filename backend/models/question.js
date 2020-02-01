const mongoose = require('mongoose')

const Question = mongoose.model('Questions', new mongoose.Schema({

  question: {
    type: String,
    required: true
  },
  answers: [[{
    type: String,
    required: true
  }]],
  correct: {
    type: String,
    required: true
  },
  questionId: {
    type: String,
    required: true
  }

}))

exports.Question = Question

