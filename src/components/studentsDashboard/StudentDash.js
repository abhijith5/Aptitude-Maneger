import React from 'react'
import QuestionBoard from '../questionBoard/QuestionBoard'
import { fakeAuth } from '../../App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function StudentDash() {
  let history = useHistory()

  let id = localStorage.getItem('application_id')
  let user_name = localStorage.getItem('student_name')
  let position = localStorage.getItem('position')

  console.log(id, user_name)
  return (
    <div>
      <nav class="uk-navbar-container" uk-navbar="true">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="#">ABC Company</a></li>

          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav" style={{ paddingRight: "50px" }}>
            {/* <li style={{ paddingRight: "20px" }}>Application Id: <span className="uk-text-bold">{id}</span></li> */}
            <li style={{ marginTop: "5px" }}>Welcome <span className="uk-text-bold">{user_name}</span></li>
            <li className="uk-button-default uk-button" style={{ marginLeft: "20px" }}
              onClick={() => {
                fakeAuth.signout(() => history.push('/'))
              }} >Signout
            </li>
          </ul>
        </div>
      </nav>
      <div className="uk-card uk-card-default">
        <div className="uk-card-body">
          <h2>You Applied for  {position}</h2>
          <button className="uk-button uk-button-primary" style={{ marginRight: "10px" }}>General</button>
          <button className="uk-button uk-button-primary" style={{ marginRight: "10px" }}>FSD</button>

        </div>
      </div>
      <QuestionBoard></QuestionBoard>
    </div>
  )
}
