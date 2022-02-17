import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Pagination from "./index"

test("Renders Pagination form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Pagination lastPage={10} page={1} />
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
