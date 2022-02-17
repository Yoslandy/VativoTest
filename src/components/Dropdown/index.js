import React, { useState } from "react"
import { Field, Formik } from "formik"
import PropTypes from "prop-types"

export default function Dropdown(props) {
    const { options, className, label } = props
    const [clicked, setClicked] = useState(false)

    return (
        <Formik>
            <div className="flex flex-col">
                <label className="font-roboto text-[12px] text-neutral-gray-100 uppercase">
                    {label}
                </label>
                <Field
                    onClick={() => setClicked(!clicked)}
                    as="select"
                    className={`dropdown w-[100px] ${
                        clicked ? "focus" : ""
                    } ${className}`}
                >
                    {options.map(o => (
                        <option
                            className="dropdown-option"
                            key={`select-${o.label}`}
                            value={o.value}
                        >
                            {o.label}
                        </option>
                    ))}
                </Field>
            </div>
        </Formik>
    )
}

Dropdown.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    label: PropTypes.string,
}

Dropdown.defaultProps = {
    className: "",
    label: "",
}
