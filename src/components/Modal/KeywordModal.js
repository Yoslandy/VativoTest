import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import PropTypes from "prop-types"

import Button from "../Button"
import Input from "../Input/index"

export default function KeywordModal(props) {
    const { title, message, open, toggle } = props

    const cancelButtonRef = useRef(null)
    const [isError, setIsError] = useState(false)

    const hideErrorMessage = () => setIsError(false)

    const initialValues = { name: "", from: "" }

    const validation = Yup.object().shape({
        name: Yup.string().required("Required"),
        from: Yup.string().required("Required"),
    })

    const onSubmit = async values => {
        console.log(values)
        /* try {
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
        } */
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={toggle}
            >
                <div className="flex content-center items-center justify-center h-full">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="ClientModal">
                            <h3>
                                <span className="ClientModal-title">
                                    {title}
                                </span>
                            </h3>
                            <p className="ClientModal-message">{message}</p>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validation}
                            >
                                {formik => {
                                    const { errors, values } = formik
                                    /* const getError = label => {
                                if (isError) return true
                                if (!values[label].length) return false
                                return errors[label]
                            } */

                                    return (
                                        <Form>
                                            <div>
                                                <div className="mb-6">
                                                    <Input
                                                        label="Client Name"
                                                        value={values.name}
                                                        className="h-[40px]"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter name"
                                                        onFocus={
                                                            hideErrorMessage
                                                        }
                                                        error={
                                                            isError ||
                                                            errors.name
                                                        }
                                                    />
                                                </div>
                                                <div className="mb-12">
                                                    <Input
                                                        label="Import From"
                                                        value={values.from}
                                                        className="h-[40px]"
                                                        type="text"
                                                        name="from"
                                                        placeholder="Enter option"
                                                        onFocus={
                                                            hideErrorMessage
                                                        }
                                                        error={
                                                            isError ||
                                                            errors.from
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end ">
                                                <Button
                                                    text="Cancel"
                                                    type="outline"
                                                    className="ClientModal-button-outline w-[100px]"
                                                    onClick={toggle}
                                                />
                                                <Button
                                                    text="Import Keyword"
                                                    type="primary"
                                                    className="ClientModal-button-primary w-[180px]"
                                                    submit
                                                />
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

KeywordModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    open: PropTypes.bool,
    toggle: PropTypes.func,
}

KeywordModal.defaultProps = {
    title: "Modal Title",
    message: "Modal message.",
    open: false,
    toggle: () => {},
}
