import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

class UserCard extends React.Component {

    render() {
        return (
            <div>
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            {this.props.user.login}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            {this.props.user.job}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(UserCard, graphql`
    fragment UserCard_user on UserCard {
        id
        name
        job
    }
`)