import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddStudent from './AddStudent';
import AddPositions from './AddPositions';

const routes = [
  {
    path: "/addStudent",
    exact: true,
    main: () => <AddStudent></AddStudent>
  },
  {
    path: "/addPositions",
    exact: true,
    main: () => <AddPositions></AddPositions>
  }
]

export default function AdminDash() {
  return (
    <Router>
      <div>
        <nav class="uk-navbar-container" uk-navbar="true">
          <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
              <li class="uk-active"><a href="#"><h3 style={{ marginBottom: 0 }}>ABC Company</h3></a></li>
            </ul>

          </div>
        </nav>

        <div className="uk-child-width-1-2@s " uk-grid="true">
          <div style={{ width: "20%" }}>
            <ul className="uk-list">
              <li className="uk-button uk-button-default"><Link to="/addStudent">Question Paper</Link></li>
              <li className="uk-button uk-button-default"><Link to="/addPositions">Question Paper</Link></li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route path="/addStudent">
                <AddStudent></AddStudent>
              </Route>
              <Route path="/addPositions">
                <AddPositions></AddPositions>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
