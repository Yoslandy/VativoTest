import React from "react"
import PropTypes from "prop-types"

export default function Table(props) {
    // eslint-disable-next-line react/prop-types
    const { children, className, color } = props
    const getBgColor = () => {
        if (color === "dark")
            return "items-center w-full border-collapse bg-sky-900 text-white"
        return "items-center w-full border-collapse"
    }
    return <table className={`${getBgColor()} ${className}`}>{children}</table>
}

Table.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(["ligth", "dark"]),
}

Table.defaultProps = {
    className: "",
    color: "ligth",
}
