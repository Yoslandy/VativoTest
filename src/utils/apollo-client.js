import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    split,
    createHttpLink,
} from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"

import { getMainDefinition } from "@apollo/client/utilities"

const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_API_WEBSOCKET_URL,
    options: {
        reconnect: true,
    },
})

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: "include",
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        )
    },
    wsLink,
    httpLink
)

export const client = new ApolloClient({
    link: ApolloLink.from([splitLink]),
    cache: new InMemoryCache(),
})
