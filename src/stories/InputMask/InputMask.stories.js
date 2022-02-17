import React from "react"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/styles/build.css"

import { masks } from "../../utils/constants"
import InputMask from "./InputMask"

export default {
    title: "Example/InputMask",
    component: InputMask,
    argTypes: {
        name: "InputMask",
    },
}

function Template(args) {
    return <InputMask {...args} />
}

export const phone = Template.bind({})
phone.args = {
    name: "maskPhone",
    placeholder: "000-000-0000",
    mask: masks.PHONE,
}

export const phoneBordered = Template.bind({})
phoneBordered.args = {
    name: "maskPhone",
    placeholder: "000-000-0000",
    className: "border border-sky-600",
    mask: masks.PHONE,
}

export const FEIN = Template.bind({})
FEIN.args = {
    name: "maskFEIN",
    placeholder: "000-0000000",
    mask: masks.FEIN,
}

export const Money = Template.bind({})
Money.args = {
    name: "maskMoney",
    placeholder: "$ 00.00",
    mask: masks.MONEY,
}

export const Percentage = Template.bind({})
Percentage.args = {
    name: "masPercentage",
    placeholder: "00.00 %",
    mask: masks.PERCENTAGE,
}
