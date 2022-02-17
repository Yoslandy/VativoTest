import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { ToastProvider } from "react-toast-notifications"
import Notification from "./index"

describe("Notification", () => {
    beforeAll(() => {
        ReactDOM.createPortal = jest.fn((element, node) => {
            return element
        })
    })

    test("Renders Notification correctly", () => {
        const component = renderer.create(
            <MemoryRouter>
                <ToastProvider
                    portalTargetSelector="body"
                    components={{ Toast: Notification }}
                ></ToastProvider>
            </MemoryRouter>
        )

        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    afterEach(() => {
        ReactDOM.createPortal.mockClear()
    })
})
