import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import { withRouter } from 'react-router-dom'
import CreateUserMutation from './mutations/CreateUserMutation'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

const SignupUserQuery = graphql`
query SignupUserQuery {
  viewer {
    id
  }
}
`


class Signup extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        job: ''
    }

    render() {
        return (
            <QueryRenderer
            environment={Environment}
            query={SignupUserQuery}
            render={
                ({error, props}) => {
                    if (error) { return <div>{ error.message }</div> }
                    else if (props) {
                        return (
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="title">
                                        Signup
                                    </div>
                                    <div className="field">
                                        <label className="label">Full name *</label>
                                        <div className="control">
                                            <input
                                            className="input"
                                            value={this.state.name}
                                            onChange={(e) => this.setState({name: e.target.value})}/>
                                        </div>
                                    </div>
                
                                    <div className="field">
                                        <label className="label">Email *</label>
                                        <div className="control">
                                            <input
                                            className="input"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({email: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password *</label>
                                        <div className="control">
                                            <input className="input" type="password" value={this.state.password}
                                            onChange={(e) => this.setState({password: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Job</label>
                                        <div className="control">
                                            <input className="input" value={this.state.job}
                                            onChange={(e) => this.setState({job: e.target.value})}/>
                                        </div>
                                    </div>
                                    {
                                        this.state.email && this.state.name && this.state.password &&
                                        <button onClick={() => this._handleSignup(props.viewer.id)}>Signup</button>
                                    }
                                </div>
                            </div>
                        )
                    }
                    return <div>Loading</div>
                }
            }
            />
        )
    }

    _handleSignup = (viewerId) => {
        const { email, name, password, job } = this.state
        CreateUserMutation(email, name, password, job, viewerId, (id, token) => {
            localStorage.setItem(GC_USER_ID, id)
            localStorage.setItem(GC_AUTH_TOKEN, token)    
            this.props.history.push('/')
        })
    }
}

export default withRouter(Signup);