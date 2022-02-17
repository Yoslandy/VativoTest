// import createNumberMask from "text-mask-addons/dist/createNumberMask"

export const masks = {
    PHONE: [
        /[0-9]/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ],
    FEIN: [/[0-9]/, /\d/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    // MONEY: createNumberMask({
    //     prefix: "$ ",
    //     suffix: "",
    //     allowDecimal: true,
    // }),
    // PERCENTAGE: createNumberMask({
    //     prefix: "",
    //     suffix: " %",
    //     allowDecimal: true,
    // }),
}

export const cleanMasks = {
    MONEY: value =>
        parseFloat(value?.replace("$ ", "")?.replace(/,/g, "") || 0),
    PERCENTAGE: value =>
        parseFloat(value?.replace(" %", "")?.replace(/,/g, "") || 0),
}

export const dropdownOptions = [
    {
        label: "Opt1",
        value: "1",
    },
    {
        label: "Opt2",
        value: "2",
    },
    {
        label: "Opt3",
        value: "3",
    },
]
