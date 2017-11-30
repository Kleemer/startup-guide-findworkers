import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import Environment from '../../Environment'

const mutation = graphql`
    mutation CreateUserMutation($input: SignupUserInput!) {
        createUser(input: $input) {
            user {
                id
            }
            clientMutationId
        }
    }
`

let tempID = 0

export default (email, name, password, job, callback) => {
    const variables = {
            input: {
            email,
            name,
            password,
            job,
            clientMutationId: ""
        }
    }

    commitMutation(
        Environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                const id = response.createUser.user.id
                const token = response.createUser.clientMutationId
                callback(id, token)
            },
            onError: err => console.error(err)
        }
    )
}