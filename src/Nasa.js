import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Nasa.css'
import RoverInfo from './RoverInfo.js'

class Nasa extends Component {
    render() {
        return (
            <div className="Nasa">
                <img 
                    className="logo"
                    src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" 
                    alt="Nasa logo"
                />
        
                <Route exact path="/nasa" render={() => <h2>No rover selected.</h2>}/>
                <Route path="/nasa/:rover" render={(props) => <h2>Rover: {props.match.params.rover}</h2>}/>
            </div>
        )
    }
}

export default Nasa