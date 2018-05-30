import React from 'react'
import { Route } from 'react-router-dom'

import './IMDB.css'
import IMDBMovie from './IMDBMovie.js'

class IMDB extends React.Component {
    state = {
        movie: '',
    }

    handleChange = (ev) => {
        this.setState({ movie: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/imdb/${this.state.movie}`)

        this.setState({ movie: '' })
    }

    render() {
        return (
            <div className="IMDB">
                <img className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                    alt=""
                />
                <p></p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Enter a movie title"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Search!</button>
                    </div>
                </form>
                <Route path="/IMDB/:movie" component={IMDBMovie}/>
                <Route exact path="/IMDB" render={() => <h3>Please enter a movie to search on IMDB</h3>} />
            </div>
        )
    }
}

export default IMDB