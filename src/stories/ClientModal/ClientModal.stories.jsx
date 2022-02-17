import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import ClientModal from "./ClientModal"

export default {
    title: "Example/ClientModal",
    component: ClientModal,
    argTypes: {
        title: "Modal title",
        message: "Modal message",
    },
}

function Template(args) {
    return <ClientModal {...args} />
}

export const Default = Template.bind({})
Default.args = {}
