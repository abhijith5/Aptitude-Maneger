const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const { Question } = require('../models/question')
const { Positions } = require('../models/positions')


router.get('/', async (req, res) => {
  const qst = await Question.find().sort('')
  res.send(qst)
})


router.post('/', async (req, res) => {

  const student = new Question({
    question: req.body.question,
    answers: req.body.options,
    correct: req.body.correct,
    questionId: req.body.questionId
  })

  await student.save()

  res.send(req.body)
})


router.get('/getPositions', async (req, res) => {
  const pst = await Positions.find().sort('')
  res.send(pst)
})


router.post('/addPosition', async (req, res) => {

  const position = new Positions({
    position: req.body.position
  })

  await position.save()

  res.send(req.body)
})

module.exports = router