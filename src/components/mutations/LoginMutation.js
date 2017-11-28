import { commitMutation, graphql } from 'react-relay'
import Environment from '../../Environment'

const mutation = graphql`
    mutation LoginMutation($input: LoginInput!) {
        login(input: $input) {
            token
            user {
                id
            }
        }
    }
`

export default (email, password, viewerId, callback) => {
    const variables = {
        input: {
            email,
            password,
            clientMutationId: ""
        }
    }

    commitMutation(
        Environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                const id = response.login.user.id
                const token = response.login.token
                callback(id, token)
              },
            onError: err => console.error(err)
        }
    )
}