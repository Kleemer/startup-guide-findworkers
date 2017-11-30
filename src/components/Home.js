import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import ListPage from './ListPage'

const HomeAllUsersQuery = graphql`
  query HomeAllUsersQuery {
    viewer {
      ...ListPage_viewer
    }
  }
`

class Home extends Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={Environment}
          query={HomeAllUsersQuery}
          render={({error, props}) => {
            if (error) { return <div>{error}</div> }
            else if (props) { return <ListPage viewer={props.viewer} /> }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default Home
