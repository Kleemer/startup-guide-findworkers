import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import Environment from '../Environment'
import ListPage from './ListPage'

const SearchUsersQuery = graphql`
  query SearchUsersQuery($searchText: String!) {
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
                    <button onClick={() => this.setState({search: true})}>Search</button>
                </div>
                {this.state.users.map(user => <div>{user.name}</div>)}
                {
                    this.state.search === false ?
                    <div>
                        Search something !
                    </div>
                    :
                    <div>
                    <QueryRenderer
                    environment={Environment}
                    query={SearchUsersQuery}
                    render={({error, props}) => {
                        if (error) { return <div>{error.source}</div> }
                        else if (props) { return <ListPage viewer={props.viewer} /> }
                        return <div>Loading</div>
                    }}
                    />
                </div>
                }
            </div>
        )
    }


    _executeSearch = {
    }
}

export default Search