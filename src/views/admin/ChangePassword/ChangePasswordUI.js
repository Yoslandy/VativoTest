import React from "react"
import PropTypes from "prop-types"
import { Form, Formik } from "formik"

import InputPassword from "../../../components/Input/InputPassword"
import Button from "../../../components/Button"

export default function ChangePasswordUI({
    schema,
    initialData,
    handleOnSubmit,
    handleOnCancel,
}) {
    return (
        <div className="flex flex-wrap">
            <div className="w-96 max-w-96  mb-12 xl:mb-0 px-4">
                <div className="mt-8 text-neutral-black">
                    <h3 className="text-[24px] font-bold mb-8">
                        Change password
                    </h3>
                </div>
                <div>
                    <Formik
                        initialValues={initialData}
                        onSubmit={async (values, { resetForm }) => {
                            const isSuccess = await handleOnSubmit(values)
                            if (isSuccess) resetForm()
                        }}
                        validationSchema={schema}
                    >
                        {formik => {
                            const {
                                errors,
                                values,
                                resetForm,
                                isValid,
                                dirty,
                                touched,
                            } = formik
                            return (
                                <Form>
                                    <div>
                                        <div className="flex flex-col mt-8">
                                            <div className="mt-2">
                                                <InputPassword
                                                    label="old password*"
                                                    name="oldPassword"
                                                    size="small"
                                                    placeholder="Enter password"
                                                    value={values.oldPassword}
                                                    error={
                                                        touched.oldPassword &&
                                                        errors.oldPassword
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-8">
                                            <div className="mt-2">
                                                <InputPassword
                                                    label="new password*"
                                                    size="small"
                                                    name="password"
                                                    placeholder="Enter new password"
                                                    value={values.password}
                                                    error={
                                                        touched.password &&
                                                        errors.password
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-8">
                                            <div className="mt-2">
                                                <InputPassword
                                                    label="confirm new password*"
                                                    size="small"
                                                    name="confirmPassword"
                                                    placeholder="Confirm new password"
                                                    value={
                                                        values.confirmPassword
                                                    }
                                                    error={
                                                        touched.confirmPassword &&
                                                        errors.confirmPassword
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-neutral-black text-[15px] font-normal ">
                                        Make sure your new password is at least
                                        15 <br />
                                        characters or at least 8 characters
                                        including a <br /> number and lowercase
                                        letter.
                                    </p>

                                    <div className="text-center mt-10 flex flex-wrap">
                                        <Button
                                            type="secondary"
                                            text="Cancel"
                                            size="small"
                                            className="mr-4 text-[15px] w-[123px] h-[34px]"
                                            onClick={() => {
                                                resetForm()
                                                handleOnCancel()
                                            }}
                                        />
                                        <Button
                                            type="primary"
                                            text="Change Password"
                                            className={`w-[194px] font-roboto text-[15px] text-neutral-white tracking-[0.5px] leading-[17.58px] font-medium ${
                                                dirty && isValid
                                                    ? "bg-primary-100"
                                                    : "bg-primary-60 hover:bg-primary-100"
                                            }`}
                                            submit
                                        />
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

ChangePasswordUI.propTypes = {
    schema: PropTypes.shape({
        oldPassword: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
    }).isRequired,
    initialData: PropTypes.shape({
        oldPassword: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
    }).isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnCancel: PropTypes.func.isRequired,
}

ChangePasswordUI.defaultProps = {}
