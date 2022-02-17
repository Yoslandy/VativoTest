/* eslint-disable no-console */
import React, { useState } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { Redirect } from "react-router-dom"
import { useQueryParam, StringParam } from "use-query-params"
import InputPassword from "../../components/Input/InputPassword"
import Button from "../../components/Button"
import logo from "../../assets/img/logo.png"
import { useGraphMutation } from "../../utils/custom-hooks/useGraphClient"
import { CHANGE_PASSWORD } from "../../graphql/mutations/auth"

const errorPolicy = "Password doesn't meet the policy requirements."
const errorMatch = "Please make sure your passwords match"
const errorRequire = "Required"
const regexPassword = /(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}|([a-zA-Z\d]{15,})/

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .required(errorRequire)
        .matches(regexPassword, errorPolicy)
        .max(50, errorPolicy),
    confirmPassword: Yup.string()
        .required(errorRequire)
        .oneOf([Yup.ref("password"), null], errorMatch)
        .matches(regexPassword, errorPolicy)
        .max(50, errorPolicy),
})

export default function ChangePassword() {
    const [token] = useQueryParam("token", StringParam)
    const { callMutation } = useGraphMutation(CHANGE_PASSWORD)

    const [redirecToModal, setRedirecToModal] = useState(false)

    const onSubmit = async values => {
        const data = {
            token,
            password: values.password,
        }

        try {
            await callMutation({
                variables: {
                    data,
                },
            })
            setRedirecToModal(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-xl bg-white border-0 px-[18px] w-[482px]">
                    <div className="rounded-t pt-8 pb-0">
                        <img src={logo} alt="logo" />
                        <div className="mt-10 text-black">
                            <h3>
                                <span className="uppercase text-[24px] font-bold mb-1 inline-block">
                                    Change password
                                </span>
                            </h3>
                            <p className="text-[15px]">
                                Define your new password below:
                            </p>
                        </div>
                    </div>
                    <div className="flex-auto pt-3 pb-5">
                        <Formik
                            initialValues={{
                                password: "",
                                confirmPassword: "",
                            }}
                            onSubmit={onSubmit}
                            validationSchema={SignupSchema}
                        >
                            {formik => {
                                const { errors, values } = formik
                                const getError = label => {
                                    if (!values[label].length) return false
                                    return errors[label]
                                }

                                const getIsValidForm = () => {
                                    const { password, confirmPassword } = values
                                    if (
                                        password.length &&
                                        confirmPassword.length
                                    )
                                        return false
                                    return true
                                }

                                return (
                                    <Form>
                                        <div className="relative w-full mb-2">
                                            <div className="mt-1 mb-[20px]">
                                                <InputPassword
                                                    name="password"
                                                    size="small"
                                                    value={values.password}
                                                    placeholder="New password"
                                                    error={getError("password")}
                                                />
                                            </div>
                                            <div className="mb-1">
                                                <InputPassword
                                                    size="small"
                                                    name="confirmPassword"
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    placeholder="Confirm new password"
                                                    error={getError(
                                                        "confirmPassword"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <p className="mt-0 pt-4 text-justify text-black text-[15px] leading-[17.58px] tracking-[0.5px]">
                                            Make sure your new password is at
                                            least 15 characters or at least 8
                                            characters including a number and
                                            lowercase letter
                                        </p>

                                        <div className="text-center mt-6 flex">
                                            <Button
                                                type="outline"
                                                text="Cancel"
                                                size="small"
                                                className="mr-2 text-[15px] w-[123px] h-[34px]"
                                                onClick={() =>
                                                    formik.setValues(
                                                        {
                                                            password: "",
                                                            confirmPassword: "",
                                                        },
                                                        false
                                                    )
                                                }
                                            />
                                            <Button
                                                type="primary"
                                                submit
                                                text="Change"
                                                size="small"
                                                className="mx-2 w-[123px] h-[34px] text-[15px]"
                                                disabled={getIsValidForm()}
                                            />
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
            {redirecToModal && (
                <Redirect to="/auth/password-succesfully-updated" />
            )}
        </div>
    )
}
