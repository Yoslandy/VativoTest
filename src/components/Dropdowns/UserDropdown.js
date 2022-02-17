import React, { useState } from "react"
import { Link } from "react-router-dom"
import { createPopper } from "@popperjs/core"
import signOutIcon from "../../assets/img/icons/sign_out.svg"
import Icon from "../Icon"

function UserDropdown() {
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)

    const btnDropdownRef = React.createRef()
    const popoverDropdownRef = React.createRef()

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "top",
        })
        setDropdownPopoverShow(true)
    }

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false)
    }

    return (
        <>
            <button
                className={`text-xs uppercase py-3 font-bold block flex items-center text-slate-700 hover:text-slate-500 ${
                    dropdownPopoverShow &&
                    "text-neutral-white hover:text-neutral-white"
                }`}
                ref={btnDropdownRef}
                onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    if (dropdownPopoverShow) {
                        closeDropdownPopover()
                    } else {
                        openDropdownPopover()
                    }
                }}
                type="button"
            >
                <Icon type="account_circle" className="mr-2" /> Profile
            </button>

            <div
                ref={popoverDropdownRef}
                className={`${
                    dropdownPopoverShow ? "block " : "hidden "
                }bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-36`}
            >
                <Link
                    className="py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-light-brown-90 flex"
                    to="/auth/login"
                >
                    Sign Out
                    <img className="ml-12" src={signOutIcon} alt="sign out" />
                </Link>
                <Link
                    className="py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-black hover:bg-light-brown-90"
                    to="/admin/password"
                >
                    <button onClick={closeDropdownPopover} type="button">
                        Change Password
                    </button>
                </Link>
            </div>
        </>
    )
}

export default UserDropdown
