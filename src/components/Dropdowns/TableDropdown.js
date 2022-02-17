import React from "react"

function NotificationDropdown() {
    // dropdown props
    const [dropdownPopoverShow] = React.useState(false)
    const btnDropdownRef = React.createRef()
    const popoverDropdownRef = React.createRef()

    return (
        <>
            <a
                className="text-slate-500 py-1 px-3"
                href="#pablo"
                ref={btnDropdownRef}
            >
                <i className="fas fa-ellipsis-v" />
            </a>
            <div
                ref={popoverDropdownRef}
                className={`${
                    dropdownPopoverShow ? "block " : "hidden "
                }bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`}
            >
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    onClick={e => e.preventDefault()}
                >
                    Action
                </a>
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    onClick={e => e.preventDefault()}
                >
                    Another action
                </a>
                <a
                    href="#pablo"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                    onClick={e => e.preventDefault()}
                >
                    Something else here
                </a>
            </div>
        </>
    )
}

export default NotificationDropdown
