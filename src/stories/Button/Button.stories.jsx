import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import Button from "./Button"

export default {
    title: "Example/Button",
    component: Button,
    argTypes: {
        label: "Holi",
        type: "primary",
        onClick: { action: "clicked" },
    },
}

function Template(args) {
    return <Button {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
    type: "primary",
    label: "Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: "secondary",
    label: "Secondary",
}

export const Warning = Template.bind({})
Warning.args = {
    type: "warning",
    label: "Warning",
}

export const Success = Template.bind({})
Success.args = {
    type: "success",
    label: "Success",
}

export const Outline = Template.bind({})
Outline.args = {
    type: "outline",
    label: "Outline",
}

export const Default = Template.bind({})
Default.args = {
    label: "Default",
}
