import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import Input from "./Input"

export default {
    title: "Example/Input",
    component: Input,
    argTypes: {
        name: "Input",
        placeholder: "",
        className: "",
    },
}

function Template(args) {
    return <Input {...args} />
}

export const Default = Template.bind({})
Default.args = {
    name: "Input",
    placeholder: "Placeholder",
}

export const Bordered = Template.bind({})
Bordered.args = {
    name: "Input",
    placeholder: "Placeholder",
    className: "border border-sky-600",
}
