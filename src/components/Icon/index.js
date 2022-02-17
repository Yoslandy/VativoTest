import React from "react"
import PropTypes from "prop-types"
import { icons, styles } from "./utils"

export default function Icon(props) {
    const { type, onClick, className, appearance } = props
    return (
        <span
            className={`${styles[appearance]} ${className}`}
            onClick={onClick}
        >
            {icons[type]}
        </span>
    )
}

Icon.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    appearance: PropTypes.string,
}

Icon.defaultProps = {
    type: "eye",
    onClick: () => {},
    className: "",
    appearance: "default",
}
