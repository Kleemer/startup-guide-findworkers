import { commitMutation, graphql } from 'react-relay'
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

export default (firstname, lastname, company, job, callback) => {
    const variables = {
            input: {
            firstname,
            lastname,
            company,
            job,
            clientMutationId: ""
        }
    }

    commitMutation(
        Environment,
        {
            mutation,
            variables,
            onCompleted: () => {
                callback()
            },
            onError: err => console.error(err)
        }
    )
}