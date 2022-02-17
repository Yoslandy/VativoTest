import React from "react"
import PropTypes from "prop-types"

export default function ErrorMessage(props) {
    const { message } = props

    if (!message) return <></>
    return <span className="formik-error-message">{message}</span>
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}
