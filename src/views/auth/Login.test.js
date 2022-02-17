import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { ToastProvider } from "react-toast-notifications"
import { client } from "../../utils/apollo-client"
import Notification from "../../components/Notification"
import Login from "./Login"
import { ApolloProvider } from "@apollo/client"

describe("Notification", () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element
        })
    })

    test("Renders Login form correctly", () => {
        const component = renderer.create(
            <MemoryRouter>
                <ApolloProvider client={client}>
                    <ToastProvider components={{ Toast: Notification }}>
                        <Login />
                    </ToastProvider>
                </ApolloProvider>
            </MemoryRouter>
        )

        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    afterEach(() => {
        ReactDOM.createPortal.mockClear()
    })
})
