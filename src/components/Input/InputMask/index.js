import React, { useState } from "react"
import { Field } from "formik"
import PropTypes from "prop-types"
import MaskedInput from "react-text-mask"

export default function InputMask(props) {
    const {
        name,
        type,
        placeholder,
        className,
        error,
        onFocus,
        mask,
        label,
        hint,
    } = props
    const [focusStyles, setFocusStyles] = useState("")

    const handleActive = () => {
        setFocusStyles("input-active")
        onFocus()
    }

    const handleBlur = () => {
        setFocusStyles("")
    }

    const getErrorStyles = () =>
        error ? "input-error" : "border-[1px] border-primary-50"

    const renderError = () =>
        error ? <span className="formik-error-message">{error}</span> : null

    return (
        <>
            <div className="flex flex-col">
                <label className="font-roboto text-[12px] text-neutral-gray-100 uppercase font-medium">
                    {label}
                </label>
                <Field name={name}>
                    {({ field }) => (
                        <MaskedInput
                            {...field}
                            mask={mask}
                            placeholder={placeholder}
                            type={type}
                            className={`input ${focusStyles} ${className} ${getErrorStyles()} mb-1`}
                            onFocus={handleActive}
                            onBlur={handleBlur}
                        />
                    )}
                </Field>
                {hint && (
                    <span className="font-roboto text-[14px] text-neutral-gray-100 text-center">
                        {hint}
                    </span>
                )}
                {renderError()}
            </div>
        </>
    )
}

InputMask.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "email"]),
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onFocus: PropTypes.func,
    mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
    label: PropTypes.string,
    hint: PropTypes.string,
}

InputMask.defaultProps = {
    name: "name",
    type: "text",
    placeholder: "Jane",
    className: "",
    error: false,
    onFocus: () => {},
    label: "",
    hint: "",
}
