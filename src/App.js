import React, { Component } from 'react'
import './App.css'
import { Route, Switch, NavLink } from 'react-router-dom'

import Github from './Github.js'
import Nasa from './Nasa.js'
import Homework from './Homework.js'
import IMDB from './IMDB.js'

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
          </li>
          <li>
            <NavLink to="/nasa">NASA API</NavLink>
          </li>
          <li>
            <NavLink to="/homework">Homework</NavLink>
          </li>
          <li>
          <NavLink to="/imdb">IMDB</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/nasa" component={Nasa} />
          <Route path="/homework" component={Homework}/>
          <Route path="/imdb" component={IMDB}/>
          <Route render={() => <p>To get started, click one of the links above.</p>} />
        </Switch>
      </div>
    )
  }
}

export default App
