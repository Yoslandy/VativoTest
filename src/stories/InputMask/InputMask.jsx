import React from "react"
import PropTypes from "prop-types"
import { Formik, Form } from "formik"
import InputMask from "../../components/Input/InputMask"

export default function CustomInputMask(props) {
    const { name, mask, ...rest } = props
    return (
        <Formik
            initialValues={{
                [name]: "",
            }}
        >
            <Form>
                <InputMask name={name} mask={mask} {...rest} />
            </Form>
        </Formik>
    )
}

CustomInputMask.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
}

CustomInputMask.defaultProps = {
    name: "inputMask",
    className: "",
}
