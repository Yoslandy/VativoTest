import React from "react"
import PropTypes from "prop-types"

export default function TableHeader(props) {
    // eslint-disable-next-line react/prop-types
    const { children, className } = props
    return <thead className={className}>{children}</thead>
}

TableHeader.propTypes = {
    className: PropTypes.string,
}

TableHeader.defaultProps = {
    className: "",
}
