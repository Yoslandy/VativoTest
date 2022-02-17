import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Formik, Form } from "formik"
import Input from "./index"

test("Renders Input form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Formik
                initialValues={{
                    input: "",
                }}
            >
                <Form>
                    <Input name="input" />
                </Form>
            </Formik>
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
