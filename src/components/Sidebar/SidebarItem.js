import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Icon from "../Icon"

export default function SidebarItem(props) {
    const { to, text, iconType } = props
    return (
        <li className="items-center">
            <Link
                className={`text-xs uppercase py-3 font-bold block flex items-center ${
                    window.location.href.indexOf(to) !== -1
                        ? "text-neutral-white hover:text-neutral-white"
                        : "text-slate-700 hover:text-slate-500"
                }`}
                to={to}
            >
                <Icon type={iconType} className="mr-2" /> {text}
            </Link>
        </li>
    )
}

SidebarItem.propTypes = {
    iconType: PropTypes.string,
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
}

SidebarItem.defaultProps = {
    iconType: "plus-square",
    text: "New Page",
}
