import React, { useState, useEffect } from "react"
import { Form, Formik } from "formik"
import { Link, Redirect } from "react-router-dom"
import * as Yup from "yup"
// import { useToasts } from "react-toast-notifications"
import InputPassword from "../../components/Input/InputPassword"
import Input from "../../components/Input"
import Icon from "../../components/Icon"
import logo from "../../assets/img/logo.png"
import { useGraphMutation } from "../../utils/custom-hooks/useGraphClient"
import { LOGIN, LOGOUT } from "../../graphql/mutations/auth"
import { constant } from "../../graphql/constants"

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
})

export default function Login() {
    // const { addToast } = useToasts()
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const hideErrorMessage = () => setIsError(false)

    const { callMutation } = useGraphMutation(LOGIN)
    const { callMutation: closeSession } = useGraphMutation(LOGOUT)

    useEffect(() => {
        closeSession()
    }, [])

    const onSubmit = async values => {
        try {
            await callMutation({
                variables: {
                    data: values,
                },
            })
            setTimeout(() => {
                setIsSuccess(true)
            }, 800)
        } catch (error) {
            if (error.message === constant.INVALID_CREDENTIALS) {
                setIsError(true)
            }
        }
    }

    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="px-4 login">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white border-0">
                        <div className="rounded-t mb-0 px-4 pb-12 pt-6">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex-auto px-4 py-10 pt-0">
                            <Formik
                                initialValues={{ password: "", email: "" }}
                                onSubmit={onSubmit}
                                validationSchema={SignupSchema}
                            >
                                {formik => {
                                    const { errors, values } = formik
                                    const getError = label => {
                                        if (isError) return true
                                        if (!values[label].length) return false
                                        return errors[label]
                                    }

                                    return (
                                        <Form>
                                            <div className="relative w-full mb-6">
                                                <Input
                                                    value={values.email}
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    onFocus={hideErrorMessage}
                                                    error={
                                                        isError || errors.email
                                                    }
                                                />
                                            </div>

                                            <div className="relative w-full mb-6">
                                                <InputPassword
                                                    placeholder="Password"
                                                    name="password"
                                                    value={values.password}
                                                    onFocus={hideErrorMessage}
                                                    error={getError("password")}
                                                />
                                                <p className="input-error-message">
                                                    {isError &&
                                                        "Invalid credentials"}
                                                </p>
                                            </div>
                                            <div />

                                            <div className="text-center mt-6 font-roboto">
                                                <button
                                                    className={`text-[18px] text-white font-medium leading-[21.09px] px-4 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 justify-between flex items-center ${
                                                        formik.values.email &&
                                                        formik.values.password
                                                            ? "bg-primary-100"
                                                            : "bg-primary-60"
                                                    }`}
                                                    type="submit"
                                                    disabled={
                                                        !formik.values.email &&
                                                        !formik.values.password
                                                    }
                                                >
                                                    <span>Sign in</span>
                                                    <Icon type="login" />
                                                </button>
                                                <Link to="/auth/forgot-password">
                                                    <span className="login-forgot font-medium text-[13px] leading-[15px]">
                                                        {" "}
                                                        Forgot Your Password?
                                                    </span>
                                                </Link>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            {isSuccess && <Redirect to="/admin" />}
        </div>
    )
}
