import React from "react"
import "../../assets/styles/build.css"

import Pagination from "./Pagination"

export default {
    title: "Example/Pagination",
    component: Pagination,
    argTypes: {
        page: 1,
        lastPage: 10,
    },
}

function Template(args) {
    return <Pagination {...args} />
}

export const Default = Template.bind({})
Default.args = {
    page: 1,
    lastPage: 10,
}
