import { commitMutation, graphql } from 'react-relay'
import Environment from '../../Environment'

const mutation = graphql`
    mutation LoginMutation($email: String!, $password: String!) {
        authenticateUser(email: $email, password: $password) {
            id
            token
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
                const id = response.authenticateUser.id
                const token = response.authenticateUser.token
                callback(id, token)
              },
            onError: err => console.error(err)
        }
    )
}