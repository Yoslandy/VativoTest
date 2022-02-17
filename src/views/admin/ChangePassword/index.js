import React, { useState } from "react"
import * as Yup from "yup"
import { useToasts } from "react-toast-notifications"
import { Redirect } from "react-router"
import ChangePasswordUI from "./ChangePasswordUI"
import { useGraphMutation } from "../../../utils/custom-hooks/useGraphClient"
import { UPDATE_PASSWORD } from "../../../graphql/mutations/auth"

const errorPolicy = "Password doesn't meet the policy requirements."
const errorMatch = "Please make sure your passwords match"
const errorRequire = "Required"
const regexEmail = /(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}|([a-zA-Z\d]{15,})/

export const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .required(errorRequire)
        .max(50, errorPolicy)
        .matches(regexEmail, errorPolicy),
    password: Yup.string()
        .required(errorRequire)
        .matches(regexEmail, errorPolicy)
        .max(50, errorPolicy),
    confirmPassword: Yup.string()
        .required(errorRequire)
        .matches(regexEmail, errorPolicy)
        .max(50, errorPolicy)
        .oneOf([Yup.ref("password"), null], errorMatch),
})

export const initialData = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
}

export function ChangePassword() {
    const [redirect, setRedirect] = useState(false)
    const { addToast } = useToasts()
    const { callMutation } = useGraphMutation(UPDATE_PASSWORD)

    const handleOnSubmit = async values => {
        const { oldPassword, password } = values
        let isSuccess = false
        try {
            await callMutation({
                variables: {
                    data: {
                        oldPassword,
                        newPassword: password,
                    },
                },
            })

            addToast("Your password was successfully updated.", {
                appearance: "success",
                title: "Password changed",
                autoDismiss: true,
            })
            isSuccess = true
        } catch {
            addToast("Please, verify your info and try again.", {
                appearance: "error",
                title: "Error",
                autoDismiss: true,
            })
            isSuccess = false
        }
        return isSuccess
    }

    const handleOnCancel = () => {
        setRedirect(true)
    }

    return (
        <>
            <ChangePasswordUI
                schema={changePasswordSchema}
                initialData={initialData}
                handleOnSubmit={handleOnSubmit}
                handleOnCancel={handleOnCancel}
            />
            {redirect && <Redirect to="/admin" />}
        </>
    )
}

export default ChangePassword
