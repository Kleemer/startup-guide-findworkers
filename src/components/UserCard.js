import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

class UserCard extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {this.props.user.firstname} {this.props.user.lastname}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div>Company: {this.props.user.company ? <span>{this.props.user.company}</span> : <span>Not specifided</span> }</div>
                            <div>Job: {this.props.user.job ? <span>{this.props.user.job}</span> : <span>Not specifided</span> }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(UserCard, graphql`
    fragment UserCard_user on User {
        id
        firstname
        lastname
        company
        job
    }
`)