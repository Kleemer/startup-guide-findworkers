import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
    mutation SignupMutation($input: SignupInput!) {
        signup(input: $input) {
            user {
                id
                email
                name
                password
                job
            }
        }
    }
`;

let tempID = 0;

export default function SignupMutation (email, name, password, job, viewerId, callback) {
    const variables = {
        input: {
            email,
            name,
            password,
            job,
            clientMutationId: ""
        },
    }

    commitMutation (
        environment,
        {
            mutation,
            variables,
            optimisticUpdater: (proxyStore) => {
                const id = 'client:newUser:' + tempID++
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
                const signupField = proxyStore.getRootField('signup')
                const newUser = signupField.getLinkedRecord('user')
        
                // 2 - add `newUser` to the store
                const viewerProxy = proxyStore.get(viewerId)
                const connection = ConnectionHandler.getConnection(viewerProxy, 'ListPage_allUsers')
                if (connection) {
                  ConnectionHandler.insertEdgeAfter(connection, newUser)
                }
            },
            onCompleted: (response) => {
                console.log(response, environment)                
                callback()
            },
            onError: err => console.error(err),
        }
    )
}