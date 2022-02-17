import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import SearchBox from "./index"

test("Renders SearchBox form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <SearchBox />
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
