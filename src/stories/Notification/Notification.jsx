import React from "react"

import Notification from "../../components/Notification"

// eslint-disable-next-line react/prop-types
export default function CustomNotification({ appearance, children, title }) {
    return (
        <Notification appearance={appearance} title={title}>
            {children}
        </Notification>
    )
}
