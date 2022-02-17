import React, { Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import PropTypes from "prop-types"
import Button from "../Button"

export default function ClientModal(props) {
    const { title, message, open, toggle } = props

    const cancelButtonRef = useRef(null)

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
                            <div className="flex justify-end ">
                                <Button
                                    text="Secondary"
                                    type="outline"
                                    className="ClientModal-button-outline"
                                />
                                <Button
                                    text="Primary"
                                    type="primary"
                                    className="ClientModal-button-primary"
                                />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

ClientModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    open: PropTypes.bool,
    toggle: PropTypes.func,
}

ClientModal.defaultProps = {
    title: "Modal Title",
    message: "Modal message.",
    open: false,
    toggle: () => {},
}
