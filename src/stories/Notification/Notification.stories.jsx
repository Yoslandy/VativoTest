import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import Notification from "./Notification"

export default {
    title: "Example/Notification",
    component: Notification,
    argTypes: {
        appearance: "success",
        title: "Title",
        children: "Notification Title",
    },
}

function Template(args) {
    return <Notification {...args} />
}

export const Success = Template.bind({})
Success.args = {
    appearance: "success",
    title: "Success",
    children: "Notification Title",
}

export const Warning = Template.bind({})
Warning.args = {
    appearance: "warning",
    title: "Warning",
    children: "Notification Title",
}

export const Error = Template.bind({})
Error.args = {
    appearance: "error",
    title: "Error",
    children: "Notification Title",
}
