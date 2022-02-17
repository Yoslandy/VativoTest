import React from "react"
import PropTypes from "prop-types"

export default function TableBody(props) {
    // eslint-disable-next-line react/prop-types
    const { children, className } = props
    return <tbody className={className}>{children}</tbody>
}

TableBody.propTypes = {
    className: PropTypes.string,
}

TableBody.defaultProps = {
    className: "",
}
