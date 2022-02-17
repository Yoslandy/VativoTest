import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Dashboard from "./Dashboard"

test("Renders Dashboard form correctly", () => {
    const client = new ApolloClient({
        uri: process
            ? process.env.REACT_APP_API_URL
            : "https://graphql.anilist.co",
        cache: new InMemoryCache(),
    })

    const component = renderer.create(
        <ApolloProvider client={client}>
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        </ApolloProvider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
