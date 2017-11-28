import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import { withRouter } from 'react-router-dom'
import LoginMutation from './mutations/LoginMutation'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

const LoginUserQuery = graphql`
query LoginUserQuery {
  viewer {
    id
  }
}
`


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <QueryRenderer
            environment={Environment}
            query={LoginUserQuery}
            render={
                ({error, props}) => {
                    if (error) { return <div>{ error.message }</div> }
                    else if (props) {
                        return (
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <div className="title">
                                        Login
                                    </div>

                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input
                                            className="input"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({email: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input
                                            className="input"
                                            type="password"
                                            value={this.state.password}
                                            onChange={(e) => this.setState({password: e.target.value})}/>
                                        </div>
                                    </div>
                                    {
                                        this.state.email && this.state.password &&
                                        <button className="button" onClick={() => this._handleLogin(props.viewer.id)}>Login</button>
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

    _handleLogin = () => {
        const { email, password } = this.state
        LoginMutation(email, password, (id, token) => {
            localStorage.setItem(GC_USER_ID, id)
            localStorage.setItem(GC_AUTH_TOKEN, token)
            this.props.history.push('/')
        })
    }
}

export default withRouter(Login);