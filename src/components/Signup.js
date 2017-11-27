import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'

class Signup extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        job: ''
    }

    render() {
        return (
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="title">
                        Signup
                    </div>
                    <div class="field">
                        <label class="label">Full name *</label>
                        <div class="control">
                            <input
                            class="input"
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email *</label>
                        <div class="control">
                            <input
                            class="input"
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password *</label>
                        <div class="control">
                            <input class="input" type="password" value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Job</label>
                        <div class="control">
                            <input class="input" value={this.state.job}
                            onChange={(e) => this.setState({job: e.target.value})}/>
                        </div>
                    </div>
                    {
                        this.state.email && this.state.name && this.state.password &&
                        <button onClick={this._handleSignup}>Signup</button>
                    }
                </div>
            </div>
        )
    }

    _handleSignup = () => {
        
    }
}

export default Signup;