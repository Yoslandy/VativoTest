import React, { useState } from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { useToasts } from "react-toast-notifications"
import Button from "../../components/Button"
import Input from "../../components/Input"
import ErrorMessage from "../../components/ErrorMessage"
import logo from "../../assets/img/logo.png"
import { useGraphMutation } from "../../utils/custom-hooks/useGraphClient"
import { FORGOT_PASSWORD } from "../../graphql/mutations/auth"

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
})

export default function ForgotPassword() {
    const { addToast } = useToasts()
    const { callMutation } = useGraphMutation(FORGOT_PASSWORD)

    const [errorMessage, setErrorMessage] = useState("")

    const onSubmit = async values => {
        try {
            await callMutation({
                variables: {
                    data: values,
                },
            })
            addToast("Your email was sent", {
                appearance: "success",
                title: "Success",
            })
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="px-4 w-[313px]">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white border-0">
                        <div className="rounded-t px-4 pt-8 pb-0">
                            <img src={logo} alt="logo" />
                            <div className="mt-6 text-black">
                                <h3>
                                    <span className="uppercase text-lg font-bold mb-1 inline-block">
                                        forgot password
                                    </span>
                                </h3>
                                <p className="text-sm">
                                    Insert your email address below to receive
                                    further instructions to change your
                                    password:
                                </p>
                            </div>
                        </div>
                        <div className="flex-auto px-4 pt-8 pb-5">
                            <Formik
                                initialValues={{ email: "" }}
                                onSubmit={onSubmit}
                                validationSchema={SignupSchema}
                            >
                                {formik => {
                                    const { errors, values } = formik
                                    return (
                                        <Form>
                                            <div className="relative w-full mb-6">
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    error={errors.email}
                                                    value={values.email}
                                                />
                                                <ErrorMessage
                                                    message={errorMessage}
                                                />
                                            </div>

                                            <div className="text-center w-full mt-6">
                                                <Button
                                                    disabled={!values.email}
                                                    type="primary"
                                                    submit
                                                    text="Send"
                                                    className="w-full h-[34px] rounded-[4px]"
                                                    size="big"
                                                />
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
