import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import { withRouter } from 'react-router-dom'
import CreateUserMutation from './mutations/CreateUserMutation'

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
        CreateUserMutation(email, name, password, job, viewerId, () => this.props.history.replace('/'))
    }
}

export default withRouter(Signup);