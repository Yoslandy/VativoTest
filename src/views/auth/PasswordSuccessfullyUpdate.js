import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import Button from "../../components/Button"
import logo from "../../assets/img/logo.png"
import success from "../../assets/img/succes.png"

export default function PasswordSuccesfullyUpdated() {
    const [goToLogin, setGoToLogin] = useState(false)

    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-[327px]">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white border-0">
                        <div className="rounded-t px-4 pt-8 pb-0">
                            <img src={logo} alt="logo" />
                            <div className="mt-[62px] text-black">
                                <h3>
                                    <span className="uppercase text-lg font-bold inline-block text-[24px] font-roboto leading-[28.13px]">
                                        password successfully updated
                                    </span>
                                </h3>
                                <div className="flex justify-center my-8">
                                    <img
                                        src={success}
                                        alt="success"
                                        className="w-[50px] h-[53px]"
                                    />
                                </div>
                                <p className="body-2">
                                    Your password has been updated, now you can
                                    login ussing your new credentials.
                                </p>
                            </div>
                        </div>
                        <div className="flex-auto px-4 mt-8 pb-5">
                            <Button
                                type=""
                                text="Go to Login"
                                className="!w-full bg-primary-50 h-[34px]"
                                onClick={() => setGoToLogin(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {goToLogin && <Redirect to="/auth/login" />}
        </div>
    )
}
