import React, { useState, useEffect } from 'react'
import Test from './components/Test'
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
import StudentLogin from './components/studentsDashboard/StudentLogin';
import ProtectedPage from './components/studentsDashboard/ProtectedPage';
import StudentDash from './components/studentsDashboard/StudentDash';
import AdminDash from './components/admin/AdminDash';
import Test2 from './components/Test2'


export default function App() {
  return (

    // <Test></Test>
    <Router>
      {/* <AuthButton></AuthButton> */}
      {/* <Link exact to="/protected"></Link> */}

      <Switch>
        <Route path="/test2">
          <Test2></Test2>
        </Route>
        <Route path="/admin">
          <AdminDash></AdminDash>
        </Route>
        <Route path="/login">
          <StudentLogin></StudentLogin>
        </Route>
        <PrivateRoute path="/">
          <StudentDash></StudentDash>
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

// function AuthButton() {
//   let history = useHistory()

//   return fakeAuth.isAuthenticated ? (
//     <p>Welcome
//       <button onClick={() => {
//         fakeAuth.signout(() => history.push("/"))
//       }}
//       >Signout</button>
//     </p>
//   ) : (
//       <p>You are not logged in</p>
//     )
// }

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }} />
          )}></Route>
  )
}