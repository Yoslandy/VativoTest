import React from "react"
import PropTypes from "prop-types"
import { sizes, types } from "./utils"

export default function Button(props) {
    const {
        text,
        onClick,
        type,
        className,
        size,
        icon,
        iconRigth,
        disabled,
        submit,
    } = props

    return (
        <button
            className={`button ${sizes[size]} ${types[type]} ${className}`}
            type={submit ? "submit" : "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {icon} {text} {iconRigth}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["small", "big"]),
    className: PropTypes.string,
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "warning",
        "outline",
        "success",
        "",
    ]),
    icon: PropTypes.node,
    iconRigth: PropTypes.node,
    disabled: PropTypes.bool,
    submit: PropTypes.bool,
}

Button.defaultProps = {
    text: "My Button",
    onClick: () => {},
    type: "primary",
    className: "",
    size: "small",
    icon: null,
    iconRigth: null,
    disabled: false,
    submit: false,
}
