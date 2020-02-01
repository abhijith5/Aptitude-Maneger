import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function QuestionOption({ question, answers, correct, questionId, selected, no }) {

  const [option, setOption] = useState("")
  const [answer, setAnswer] = useState([])
  const [dis, setDis] = useState(false)
  const [response, setResponse] = useState()
  // const [o, setO] = useState(['a', 'b', 'c', 'd'])

  const selectOption = (option, text) => {

    setDis(true)
    setOption(option)
  }


  const resetSubmit = () => {
    setOption('')
  }

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/questions')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.error(err))

  // })

  return (
    <div style={{ marginBottom: "20px" }}>
      <h5>{no} - {question}</h5>
      <div>

        {answers.map((text, index) => (

          <span>
            <input
              type="radio"
              name={text[1]}
              value={text[0]}
              checked={option === text[0]}
              onChange={() => selectOption(text[0], text[1])}
              onClick={(e) => selected(e.target.value)}
              key={index}
            />
            {text[1]} {" "}
            < br ></br>
          </span>
        ))}
        {/* <input type="radio" name="gender" value="a" checked={option === 'a'} onChange={selectOption} /> Male<br></br>
        <input type="radio" name="gender" value="b" checked={option === 'b'} onChange={selectOption} /> Female<br></br>
        <input type="radio" name="gender" value="c" checked={option === 'c'} onChange={selectOption} /> Other<br></br>
        <input type="radio" name="gender" value="d" checked={option === 'd'} onChange={selectOption} /> Female<br></br> */}
      </div>
      <div >
        <button className="uk-button uk-button-danger" onClick={resetSubmit}> Reset</button>
        {/* <button className="uk-button uk-button-primary" onClick={handleSubmit} disabled={!dis}>Submit</button> */}
      </div>
      <hr></hr>
    </div >
  )
}
