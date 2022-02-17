import React from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"
import Input from "../../components/Input"

export default function CustomInput(props) {
    const { name, ...rest } = props
    return (
        <Formik
            initialValues={{
                [name]: "",
            }}
        >
            <Form>
                <Input name={name} {...rest} />
            </Form>
        </Formik>
    )
}

CustomInput.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
}

CustomInput.defaultProps = {
    name: "input",
    className: "",
}
