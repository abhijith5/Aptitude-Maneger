import React, { Component } from 'react'
// import quizService from "./qstionBank"
import QuestionOption from './QuestionOption'
import axios from 'axios'

export default class QuestionCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionBank: [],
      response: 0,
      score: 0,

    }
  }

  // getQuestions = () => {
  //   quizService().then(question => {
  //     this.setState({
  //       questionBank: question
  //     })
  //     console.log(this.state.questionBank)
  //   })
  // }

  getQuestions = () => {
    axios.get('http://localhost:8000/api/questions')
      .then(res =>
        this.setState({
          questionBank: res.data
        })
      )
      .catch(err => console.error(err))
  }
  componentDidMount() {
    this.getQuestions()
  }

  computeAnswer = (answer, correctedAnswer) => {
    if (answer === correctedAnswer) {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })

  }
  handleSubmit = () => {

    console.log(this.state.score)

  }

  render() {
    return (
      <div >
        <div className="uk-card uk-card-default" >
          <div className="uk-card-body">
            {
              this.state.questionBank.map(
                ({ question, answers, correct, questionId }, index) =>
                  <QuestionOption
                    no={index + 1}
                    question={question}
                    answers={answers}
                    key={index}
                    correct={correct}
                    selected={answer => this.computeAnswer(answer, correct)}
                  >
                  </QuestionOption>

              )}
            <div className="uk-text-right">
              <button className="uk-button uk-button-primary" onClick={this.handleSubmit} uk-toggle="target: #modal-close-default">Submit</button>
            </div>
            <div id="modal-close-default" uk-modal="true">
              <div class="uk-modal-dialog uk-modal-body">
                <button class="uk-modal-close-default" type="button" uk-close="true"></button>
                <h2 class="uk-modal-title">Aptitude Test</h2>
                <p>Your Score : {this.state.score} / 10</p>
              </div>
            </div>

          </div>
        </div>
      </div >
    )
  }
}




// import React, { useState } from 'react'
// import QuestionOption from './QuestionOption'
// import Question from "./qstionBank"

// export default function QuestionCard() {

//   const [questionBank, setQuestionBank] = useState([])

//   const getQuestions = () => {
//     Question().then(question => {
//       setQuestionBank[question]
//     })
//   }

//   return (
//     <div >
//       <div className="uk-card uk-card-default" >
//         <div className="uk-card-body">
//           <h5>{questionBank.question}</h5>
//           <QuestionOption></QuestionOption>
//         </div>
//       </div>
//     </div >
//   )
// }
