/* eslint-disable react/prop-types */
import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { borders, colors } from "./utils"
import Icon from "../Icon"
import SuccessIcon from "../../assets/img/notification-icons/succes.png"

export default function Notification(props) {
    const { appearance, onDismiss, children, title } = props

    const getColorIcon = useCallback(() => colors[appearance], [appearance])

    return (
        <div
            className={`border-b-8 bg-white rounded w-72 p-2 h-full shadow ${borders[appearance]}`}
        >
            <div className="flex w-full">
                <div>
                    {appearance === "success" ? (
                        <img src={SuccessIcon} alt="success" />
                    ) : (
                        <Icon type={appearance} className={getColorIcon()} />
                    )}
                </div>
                <div className="flex flex-col ml-4">
                    <p className="font-medium">{title}</p>
                    <span className="font-normal">{children}</span>
                </div>
                <span onClick={onDismiss} className="absolute right-[27px]">
                    <i className="fas fa-times ml-8 cursor-pointer" />
                </span>
            </div>
        </div>
    )
}

Notification.propTypes = {
    title: PropTypes.string,
    appearance: PropTypes.oneOf(["error", "success", "warning"]),
}

Notification.defaultProps = {
    title: "Title",
    appearance: "success",
}
