import React from "react"
import PropTypes from "prop-types"

import Button from "../../components/Button"

export default function CustomButton({ label, onClick, type }) {
    return <Button text={label} onClick={onClick} type={type} />
}

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["primary", "secondary"]),
}

CustomButton.defaultProps = {
    type: "primary",
}
