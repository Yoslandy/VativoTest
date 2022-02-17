import React from "react"
import Datepicker from "../../components/Datepicker"

export default {
    title: "Example/Datepicker",
    component: Datepicker,
    argTypes: {
        label: "Contract day",
    },
}

function Template(args) {
    return <Datepicker {...args} />
}

export const Default = Template.bind({})
Default.args = {
    label: "Contract day",
}
