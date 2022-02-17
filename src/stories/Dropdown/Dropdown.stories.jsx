import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import Dropdown from "./Dropdown"

const options = [
    {
        value: "1",
        label: "1",
    },
    {
        value: "2",
        label: "2",
    },
]

export default {
    title: "Example/Dropdown",
    component: Dropdown,
    argTypes: {
        name: "Dropdown",
        options,
    },
}

function Template(args) {
    return <Dropdown {...args} />
}

export const Default = Template.bind({})
Default.args = {
    name: "Dropdown",
    options,
}
