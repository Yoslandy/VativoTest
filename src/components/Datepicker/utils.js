export const days = Array.from({ length: 31 }, (v, k) => k + 1).map(d => ({
    label: d.toString(),
    value: d,
}))

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
].map((m, i) => ({
    label: m,
    value: i + 1,
}))

const arrayOfYears = () => {
    const max = new Date().getFullYear()
    const min = max - 9
    const year = []

    // eslint-disable-next-line no-plusplus
    for (let i = max; i >= min; i--) {
        year.push(i)
    }

    const listYear = year.map(y => ({
        label: y.toString(),
        value: y,
    }))

    return listYear
}

export const years = arrayOfYears()
