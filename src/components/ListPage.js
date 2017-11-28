import React, { Component } from 'react'
import UserCard from './UserCard'
import { createFragmentContainer, graphql } from 'react-relay'

class ListPage extends Component {
    render() {
        return (
            <div>
                {this.props.viewer.allUsers.edges.map(({node}) => 
                <UserCard key={node.id} user={node}/>
            )}
            </div>
        )
    }
}

export default createFragmentContainer(ListPage, graphql`
fragment ListPage_viewer on Viewer {
  allUsers(filter: { job_contains: searchText }, last: 5, orderBy: createdAt_DESC)
  @connection(key: "ListPage_allUsers", filters: [])
  @argumentDefinitions(searchText: { type: "String", defaultValue: "" }) {
    edges {
      node {
        ...UserCard_user
      }
    }
  }
}
`)