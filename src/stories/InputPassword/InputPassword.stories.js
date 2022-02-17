import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import InputPassword from "./InputPassword"

export default {
    title: "Example/InputPassword",
    component: InputPassword,
    argTypes: {
        name: "Password",
    },
}

function Template(args) {
    return <InputPassword {...args} />
}

export const Default = Template.bind({})
Default.args = {
    name: "Password",
    placeholder: "Placeholder",
}
