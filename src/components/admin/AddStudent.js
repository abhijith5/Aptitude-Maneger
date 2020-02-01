import React, { useState, useEffect } from 'react'
// import './AdminDashboard.css'
// import College from './CollegeDetails/College'
import axios from 'axios'
import QuestionOption from '../questionBoard/QuestionOption'


export default function AddStudent() {

  const [question, setQuestion] = useState('')
  const [questionBank, setQuestionBank] = useState([])
  const [optiona, setOptionA] = useState('')
  const [optionb, setOptionB] = useState('')
  const [optionc, setOptionC] = useState('')
  const [optiond, setOptionD] = useState('')
  const [correct, setCorrect] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      question: question,
      options: [
        ["a", optiona],
        ["b", optionb],
        ["c", optionc],
        ["d", optiond]
      ],
      correct: correct,
      questionId: '9992'
    }
    console.log(data)

    axios.post('http://localhost:8000/api/questions', data)
      .then(res => (console.log(res)))
      .catch(err => console.error(err))
  }

  const getQuestions = () => {
    axios.get('http://localhost:8000/api/questions')
      .then(res =>
        setQuestionBank(res.data)
      )
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getQuestions()
  })
  const computeAnswer = (answer, correctedAnswer) => {
    if (answer === correctedAnswer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })

  }

  return (
    <div className="uk-container">
      <button className="uk-button uk-button-secondary" type="button" uk-toggle="target: #modal-close-default">Preview</button>
      <div id="modal-close-default" uk-modal="true">
        <div class="uk-modal-dialog uk-modal-body">
          <button class="uk-modal-close-default" type="button" uk-close="true"></button>
          {
            questionBank.map(
              ({ question, answers, correct, questionId }, index) =>
                <QuestionOption
                  question={question}
                  answers={answers}
                  key={index}
                  correct={correct}
                  selected={answer => computeAnswer(answer, correct)}
                >
                </QuestionOption>
            )}
        </div>
      </div>
      <h1>Enter Questions</h1>
      <form onSubmit={handleSubmit}>
        <div className="uk-margin">
          <label className="uk-form-label uk-text-bold" for="form-horizontal-text">Enter Question :</label>
          <textarea
            className="uk-textarea"
            rows="2"
            placeholder="qustion"
            onChange={(e) => setQuestion(e.target.value)}>
          </textarea>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" for="form-stacked-text">Option a : </label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="option a"
              value={optiona}
              onChange={(e) => setOptionA(e.target.value)}
              style={{ width: "50%" }} />
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" for="form-stacked-text">Option b : </label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="option b"
              style={{ width: "50%" }}
              value={optionb}
              onChange={(e) => setOptionB(e.target.value)}
            />
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" for="form-stacked-text">Option c : </label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="option c"
              style={{ width: "50%" }}
              value={optionc}
              onChange={(e) => setOptionC(e.target.value)}
            />
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" for="form-stacked-text">Option d : </label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="option d"
              style={{ width: "50%" }}
              value={optiond}
              onChange={(e) => setOptionD(e.target.value)}
            />
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label uk-text-bold" for="form-stacked-text">Answer (option: a / b / c / d) </label>
          <div class="uk-form-controls">
            <input
              class="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Answer"
              style={{ width: "50%" }}
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
            />
          </div>
        </div>

        <button className="uk-button uk-button-primary">Submit</button>
      </form>
    </div>

  )
}
