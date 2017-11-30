import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import ListPage from './ListPage'

const SearchUsersQuery = graphql`
  query SearchUsersQuery($searchText: UserFilter!) {
    viewer {
      ...ListPage_viewer @arguments(searchText: $searchText)
    }
  }
`

class Search extends Component {

    state = {
        users: [],
        searchText: '',
        search: false
    }

    render() {
        return (
            <div>
                <div>
                    Search
                    <input
                    type='text'
                    onChange={(e) => this.setState({ searchText: e.target.value })}/>
                </div>
                <div>
                <QueryRenderer
                environment={Environment}
                query={SearchUsersQuery}
                variables={{ searchText: { job_contains: this.state.searchText } }}
                render={({error, props}) => {
                    if (error) { return <div>{error}</div> }
                    else if (props) { return <ListPage viewer={props.viewer} /> }
                    return <div>Loading</div>
                }}/>
                </div>
            </div>
        )
    }


    _executeSearch = {
    }
}

export default Search