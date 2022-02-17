import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Formik, Form } from "formik"
import Datepicker from "./index"

test("Renders Datepicker correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Formik
                initialValues={{
                    datepicker: "",
                }}
            >
                <Form>
                    <Datepicker label="Contract date" />
                </Form>
            </Formik>
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
