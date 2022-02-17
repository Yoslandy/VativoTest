import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Button from "./index"

test("Renders Button form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Button type="primary" />
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
