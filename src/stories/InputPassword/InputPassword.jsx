import React from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"
import InputPassword from "../../components/Input/InputPassword"

export default function CustomPassword(props) {
    const { name, ...rest } = props
    return (
        <Formik
            initialValues={{
                [name]: "",
            }}
        >
            <Form>
                <InputPassword name={name} {...rest} />
            </Form>
        </Formik>
    )
}

CustomPassword.propTypes = {
    name: PropTypes.string,
}

CustomPassword.defaultProps = {
    name: "password",
}
