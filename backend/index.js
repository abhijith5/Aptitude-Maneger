const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/aptitude', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB'))

const users = require('./routes/addUser')
app.use('/api/users', users)

const questions = require('./routes/addQuestions')
app.use('/api/questions', questions)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}`))