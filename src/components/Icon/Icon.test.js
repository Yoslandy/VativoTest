import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Icon from "./index"

test("Renders Icon correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Icon type="eye" />
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
