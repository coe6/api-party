import React from 'react'

import './Github.css'
import GithubUser from './GithubUser.js'
import { Route } from 'react-router-dom'

class Github extends React.Component {
    state = {
        username: '',
    }

    handleChange = (ev) => {
        this.setState({ username: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/github/${this.state.username}`)

        this.setState({ username: '' })
    }

    render() {
        return (
            <div className="Github">
                <img className="logo"
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" 
                    alt="GitHub" 
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look-up User</button>
                    </div>
                </form>
                <Route path="/github/:username" component={GithubUser}/>
                <Route exact path ="/github" render={() => <h3>Please enter an username to search on GitHub</h3>} />
            </div>
        )
    }
}

export default Github