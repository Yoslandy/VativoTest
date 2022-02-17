import React, { useState } from "react"
import { Field, ErrorMessage } from "formik"
import PropTypes from "prop-types"
import { sizes } from "./utils"
import Icon from "../../Icon"

export default function InputPassword(props) {
    const { name, placeholder, className, error, size, onFocus, label, hint } =
        props

    const [isPasswordType, setIsPasswordType] = useState(true)

    const handleActive = () => {
        onFocus()
    }

    const getErrorStyles = () =>
        error ? "input-error" : "border-[1px] border-primary-50"

    const renderError = () =>
        error && (
            <span className="formik-error-message">
                <ErrorMessage name={name} />
            </span>
        )

    return (
        <>
            <div className="flex flex-col">
                <label className="font-roboto text-[12px] text-neutral-gray-100 uppercase font-medium">
                    {label}
                </label>
                <div
                    className={`password-wrapper ${className} ${getErrorStyles()} ${
                        sizes[size]
                    }`}
                >
                    <Field
                        name={name}
                        placeholder={placeholder}
                        type={isPasswordType ? "password" : "text"}
                        className={`password-input ${
                            size === "big" ? "h-[41px]" : "h-[38px]"
                        }`}
                        onFocus={handleActive}
                    />
                    <div className="password-icon cursor-pointer">
                        <Icon
                            type={isPasswordType ? "eye" : "eye-slash"}
                            onClick={() => setIsPasswordType(!isPasswordType)}
                        />
                    </div>
                </div>
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

InputPassword.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    size: PropTypes.oneOf(["small", "big"]),
    onFocus: PropTypes.func,
    label: PropTypes.string,
    hint: PropTypes.string,
}

InputPassword.defaultProps = {
    name: "name",
    placeholder: "Jane",
    className: "",
    error: false,
    size: "big",
    onFocus: () => {},
    label: "",
    hint: "",
}
