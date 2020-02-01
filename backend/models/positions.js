const mongoose = require('mongoose')

const Positions = mongoose.model('Positions', new mongoose.Schema({

  position: {
    type: String,
    required: true
  }
}))

exports.Positions = Positions

