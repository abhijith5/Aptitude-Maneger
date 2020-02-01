const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const { User } = require('../models/user')

router.get('/', async (req, res) => {
  const students = await User.find().sort('user_name')
  res.send(students)
})
router.post('/', async (req, res) => {

  const students = new User({
    application_id: req.body.application_id,
    user_name: req.body.user_name,
    department: req.body.department,
    college_name: req.body.college_name
  })

  await students.save()
  res.send(students)
})

module.exports = router