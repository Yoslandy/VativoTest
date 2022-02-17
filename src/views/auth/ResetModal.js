import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../../components/Button"
import logo from "../../assets/img/logo.png"

export default function ResetModal() {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
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
                        <div className="px-4 w-[574px]">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-md bg-white border-0">
                                <div className="rounded-t">
                                    <div className="px-8 py-8">
                                        <img src={logo} alt="logo" />
                                        <div className="mt-10 text-black">
                                            <h3>
                                                <span className="text-5xl font-bold mb-6 font-roboto inline-block">
                                                    Reset your password
                                                </span>
                                            </h3>
                                            <p className="body-3">Hi Oscar.</p>
                                            <p className="body-3 mb-10">
                                                You recently requested to reset
                                                your VativoRX account password.
                                            </p>
                                        </div>
                                        <div className="flex justify-center">
                                            <Button
                                                type="primary"
                                                text="Reset password"
                                                size="small"
                                                className="px-5 text-xs w-[170px]"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            />
                                        </div>

                                        <p className="mt-8 mb-7 text-xs text-center">
                                            To receive more help on this issue,
                                            please contact our support team at
                                            support@vativorx.com.
                                        </p>
                                    </div>
                                    <div className="h-20 bg-light-brown-100 flex justify-center items-center flex-col rounded-b">
                                        <p className="text-sm underline font-semibold">
                                            Terms of Service
                                        </p>
                                        <span className="text-sm">
                                            &copy; VativorRx 2022
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
