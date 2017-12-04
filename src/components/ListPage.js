import React, { Component } from 'react'
import UserCard from './UserCard'
import { createRefetchContainer, graphql } from 'react-relay'

class ListPage extends Component {
    render() {
        return (
            <div key="listpage">
                {this.props.viewer.allUsers.edges.map(({node}) => 
                <UserCard key={node.id} user={node}/>
            )}
            </div>
        )
    }
}

export default createRefetchContainer(ListPage, graphql`
fragment ListPage_viewer on Viewer 
@argumentDefinitions(searchText: { type: "UserFilter", defaultValue: { job_contains: ""} }) {
  allUsers(filter: $searchText,
  last: 5, orderBy: createdAt_DESC) {
    edges {
      node {
        id
        ...UserCard_user
      }
    }
  }
}
`)