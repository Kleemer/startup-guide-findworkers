import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CreateUserMutation from './mutations/CreateUserMutation'

class Add extends Component {

    state = {
        firstname: '',
        lastname: '',
        company: '',
        job: ''
    }

    render() {
        return (
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="title">
                        Add profile
                    </div>
                    <div className="field">
                        <label className="label">First name *</label>
                        <div className="control">
                            <input
                            className="input"
                            value={this.state.firstname}
                            onChange={(e) => this.setState({firstname: e.target.value})}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Last name *</label>
                        <div className="control">
                            <input
                            className="input"
                            value={this.state.lastname}
                            onChange={(e) => this.setState({lastname: e.target.value})}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Company</label>
                        <div className="control">
                            <input
                            className="input"
                            value={this.state.company}
                            onChange={(e) => this.setState({company: e.target.value})}/>
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
                        this.state.firstname && this.state.lastname &&
                        <button onClick={() => this._handleAdd()}>Add</button>
                    }
                </div>
            </div>
        )
    }

    _handleAdd = () => {
        const { firstname, lastname, company, job } = this.state
        CreateUserMutation(firstname, lastname, company, job, () => { this.props.history.push('/') })
    }
}

export default withRouter(Add);