import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

class UserCard extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            {this.props.user.name}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {this.props.user.job}
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
        name
        job
    }
`)