import React, { Component } from 'react'
import UserCard from './UserCard'
import { createRefetchContainer, graphql } from 'react-relay'

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

export default createRefetchContainer(ListPage, graphql`
fragment ListPage_viewer on Viewer 
@argumentDefinitions(searchText: { type: "String", defaultValue: "" }) {
  allUsers(filter:
  {
    job_contains: "att"
  },
  last: 5, orderBy: createdAt_DESC) {
    edges {
      node {
        ...UserCard_user
      }
    }
  }
}
`)