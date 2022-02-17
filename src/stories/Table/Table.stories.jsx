import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import Table from "./Table"

export default {
    title: "Example/Table",
    component: Table,
    argTypes: {},
}

function Template(args) {
    return <Table {...args} />
}

export const Default = Template.bind({})

export const Dark = Template.bind({})
Dark.args = {
    color: "dark",
}
