const mongoose = require('mongoose')

const User = mongoose.model('Users', new mongoose.Schema({
  application_id: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  college_name: {
    type: String,
    required: true
  }
}))

exports.User = User