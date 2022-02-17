import React from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"

import Dropdown from "../../components/Dropdown"

export default function CustomDropdown({ options, name }) {
    return (
        <Formik
            initialValues={{
                [name]: 2,
            }}
        >
            <Form>
                <Dropdown name={name} options={options} />
            </Form>
        </Formik>
    )
}

CustomDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
