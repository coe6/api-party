import React, { Component } from 'react'

class IMDBMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movie: {},
        }

        this.fetchUserData(this.props)
    }

    componentWillReceiveProps(nextProps) {

    }

    fetchUserData = (props) => {
        
    }

    render() {
        const { movie } = this.state
        return (
            <div className="IMDBMovie">

            </div>
        )
    }
}

export default IMDBMovie