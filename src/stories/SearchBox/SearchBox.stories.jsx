import React from "react"
import "../../assets/styles/build.css"
import SearchBox from "./SearchBox"

export default {
    title: "Example/SearchBox",
    component: SearchBox,
}

function Template() {
    return <SearchBox />
}

export const Default = Template.bind({})
