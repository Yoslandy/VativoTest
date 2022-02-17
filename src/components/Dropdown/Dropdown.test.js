import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Formik, Form } from "formik"
import DropDown from "./index"

test("Renders DropDown form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Formik
                initialValues={{
                    colors: "#264653",
                }}
            >
                <Form>
                    <DropDown
                        label="colors"
                        className="Test"
                        options={[
                            {
                                label: "#264653",
                                value: "#264653",
                            },
                            {
                                label: "#2a9d8f",
                                value: "#2a9d8f",
                            },
                            {
                                label: "#e9c46a",
                                value: "#e9c46a",
                            },
                        ]}
                    />
                </Form>
            </Formik>
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
