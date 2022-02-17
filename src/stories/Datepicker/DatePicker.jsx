import React from "react"
import { Formik, Form } from "formik"
import Datepicker from "../../components/Datepicker"

export default function DatePicker() {
    return (
        <Formik initialValues={{}}>
            <Form>
                <Datepicker />
            </Form>
        </Formik>
    )
}
