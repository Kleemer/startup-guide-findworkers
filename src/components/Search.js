import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import ListPage from './ListPage'

const SearchUsersQuery = graphql`
query SearchUsersQuery {
  viewer {
    ...ListPage_viewer
  }
}
`

class Search extends Component {

    state = {
        users: [],
        searchText: ''
    }

    render() {
        return (
            <div>
                <div>
                    Search
                    <input
                    type='text'
                    onChange={(e) => this.setState({ searchText: e.target.value })}/>
                    <button onClick={() => this._executeSearch()}>Search</button>
                </div>
                {this.state.users.map(user => <div>{user.name}</div>)}
            </div>
        )
    }


    _executeSearch() {

    }
}

export default Search;