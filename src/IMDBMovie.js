import React, { Component } from 'react'

import './IMDBMovie.css'

class IMDBMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: {},
        }

        this.fetchUserData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if(locationChanged) {
            this.fetchUserData(nextProps)
        }
    }

    fetchUserData = (props) => {
        const title = props.match.params.movie
        const movieTitle = title.replace(/ +/g, "+")

        fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=744c760f`)
            .then(response => response.json())
            .then(movie => this.setState({ movie }))
            .catch((() => console.log("error")))
    }

    render() {
        const { movie } = this.state
        return (
            <div className="IMDBMovie">
                <img className="poster" src={movie.Poster} alt="" />
                <h2>{movie.Title}, <em>{movie.Year}</em></h2>
                <h4>{movie.Genre}, <em>Rated: {movie.Rated}</em></h4>
                <p>{movie.Plot}</p>
                <h4>Rating: {movie.imdbRating}/10</h4>
            </div>
        )
    }
}

export default IMDBMovie