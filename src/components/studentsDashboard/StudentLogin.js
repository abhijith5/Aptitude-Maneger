import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import axios from 'axios'
import { fakeAuth } from '../../App'


export default function StudentLogin() {

  const [options, setOptions] = useState([])

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  // let login = () => {
  //   fakeAuth.authenticate(() => {
  //     history.replace(from);
  //   });
  // };


  const [applicationId, setApplicationId] = useState('')
  const [userName, setUserName] = useState('')
  const [department, setDepartment] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [submitBool, setSubmitBool] = useState(false)
  const [position, setPosition] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      application_id: applicationId,
      user_name: userName,
      department: department.toUpperCase(),
      college_name: collegeName
    }
    console.log(data)

    axios.post('http://localhost:8000/api/users', data)
      .then(res => (
        fakeAuth.authenticate(() => {
          history.replace(from);
        }),
        localStorage.setItem('student_name', userName),
        localStorage.setItem('application_id', applicationId),
        localStorage.setItem('position', position),

        setSubmitBool(true))
      )
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/question/getPositions')
      .then(res => console.log(res.data)
        (setOptions(res.data)))
      .catch(err => console.error(err))
  }, [])


  return (
    <div>
      <div className="uk-child-width-1-2@s " uk-grid="true">
        <div className="" >
          <div className="user_bg">
            <div className="user_left_text uk-padding">
              <h1 className="user_white">ABC Company</h1>
              <h6 className="user_white">Aptitude Test</h6>
              <div className="user_white user_margin" style={{ marginTop: "70px" }}>
                <p>sadasdasdas</p>
                <p>dsadsadas</p>
                <p>sadasdasdas</p>
                <p>wqehqw</p>
              </div>

            </div>
          </div>

        </div>
        <div className="user_right uk-padding">
          <h1>User Login</h1>
          <form class="uk-form-horizontal uk-margin-large" onSubmit={handleSubmit}>

            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold" for="form-horizontal-text">Application Id :</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Enter your application id"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)} required
                />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold" for="form-horizontal-text">Name :</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)} required />
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold" for="form-stacked-select">Applied for</label>
              <div class="uk-form-controls">
                <select class="uk-select" id="form-stacked-select" onChange={(e) => setPosition(e.target.value)}>
                  <option value="Software Developer">Software Developer</option>
                  <option value="PR Excutive">PR Executive</option>
                  <option value="BD Executive">BD Excutive</option>
                  <option value="Network Admin">Network Admin</option>
                </select>
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label  uk-text-bold" for="form-horizontal-text">department :</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Enter your department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)} required />
              </div>
            </div>
            <div class="uk-margin">
              <label class="uk-form-label uk-text-bold" for="form-horizontal-text">College name :</label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="form-horizontal-text"
                  type="text"
                  placeholder="Enter your college"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)} required />
              </div>
            </div>
            <div className="uk-text-right">
              <button type="submit" className="uk-button uk-button-default uk-button-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* } */}
      {/* {submitBool ? <StudentDash></StudentDash> : null} */}
    </div>
  )
}
