import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import Environment from '../../Environment'

const mutation = graphql`
    mutation CreateUserMutation($input: SignupUserInput!) {
        createUser(input: $input) {
            user {
                id
                email
                name
                password
                job
            }
        }
    }
`

let tempID = 0

export default (email, name, password, job, viewerId, callback) => {
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
            optimisticUpdater: (proxyStore) => {
                const id = 'client:newUser' + tempID++
                const newUser = proxyStore.create(id, 'User')
                newUser.setValue(id, 'id')
                newUser.setValue(email, 'email')
                newUser.setValue(name, 'name')
                newUser.setValue(password, 'password')
                newUser.setValue(job, 'job')

                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allUsers')
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newUser)
                }
            },
            updater: (proxyStore) => {

                const createUserField = proxyStore.getRootField('createUser')
                const newUser = createUserField.getLinkedRecord('user')

                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allUsers')
                if (connection) {
                    ConnectionHandler.insertEdgeAfter(connection, newUser)
                }
            },
            onCompleted: () => {
                callback()
            },
            onError: err => console.error(err)
        }
    )
}