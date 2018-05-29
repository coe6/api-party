import React, { Component } from 'react'
import './App.css'
import { Route, Switch, NavLink } from 'react-router-dom'

import Github from './Github.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
            {/* <NavLink to="/nasa">NASA</NavLink>
            <NavLink to="/homework">Homework</NavLink> */}
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" render={() => <h1>NASA!</h1>} />
          <Route path="/homework" render={() => <h1>homework!</h1>} />
          <Route render={() => <p>To get started, click one of the links above.</p>} />
        </Switch>
      </div>
    )
  }
}

export default App
