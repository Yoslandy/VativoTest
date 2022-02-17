import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"

export default function SearchBox(props) {
    const { value, className, onChange } = props
    const [state, setState] = useState(value)
    const [focus, setFocus] = useState(false)

    const onChangeLocal = useCallback(
        event => {
            setState(event.target.value)
            onChange(event.target.value)
        },
        [state]
    )

    const onFocus = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false)
    }

    return (
        <div
            className={`bg-white rounded-md w-full flex items-center hover:text-white hover:bg-primary-100 ${
                focus && "bg-primary-100"
            } ${className}`}
        >
            <Icon type="search" className="p-2" />
            <input
                onFocus={onFocus}
                onBlur={onBlur}
                type="text"
                className="input-focus-border-none w-full border-0 p-0 bg-transparent hover:placeholder:text-white"
                onChange={onChangeLocal}
                placeholder="Search"
            />
        </div>
    )
}

SearchBox.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
}

SearchBox.defaultProps = {
    value: "",
    className: "",
    onChange: () => {},
}
