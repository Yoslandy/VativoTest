import React, { useState } from "react"
import { DropdownDate, DropdownComponent } from "react-dropdown-date"
import PropTypes from "prop-types"

function Datepicker({ label }) {
    // eslint-disable-next-line no-unused-vars
    const [dates, setDate] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [selectedDate, setSelectedDate] = useState("11-15-2015")
    const formatDate = dat => {
        // formats a JS date to 'mm-dd-yyyy'
        const d = new Date(dat)
        let month = `${d.getMonth() + 1}`
        let day = `${d.getDate()}`
        const year = d.getFullYear()

        if (month.length < 2) month = `0${month}`
        if (day.length < 2) day = `0${day}`
        return [year, month, day].join("-")
    }

    return (
        <>
            <div className="flex flex-col">
                <label className="font-roboto text-[12px] text-neutral-gray-100 uppercase">
                    {label}
                </label>
                <DropdownDate
                    startDate="2012-01-01"
                    endDate="2021-12-31"
                    order={[
                        DropdownComponent.month,
                        DropdownComponent.day,
                        DropdownComponent.year,
                    ]}
                    ids={{
                        month: "select-month",
                        day: "select-day",
                        year: "select-year",
                    }}
                    classes={{
                        dateContainer: "flex",
                        yearContainer: "rounded",
                        monthContainer: "rounded",
                        dayContainer: "rounded",
                        year: "rounded dropdown w-[94px] ",
                        month: "rounded mr-2 dropdown w-[94px]",
                        day: "rounded mr-2 dropdown w-[94px]",
                        yearOptions: "dropdown-option",
                        monthOptions: "dropdown-option",
                        dayOptions: "dropdown-option",
                    }}
                    onDateChange={date => {
                        setDate(date)
                        setSelectedDate(formatDate(date))
                        console.log(date)
                    }}
                    /* onMonthChange={month => {
                        // optional
                        console.log(month)
                        console.log({ date: dates, select: selectedDate })
                    }}
                    onDayChange={day => {
                        // optional
                        console.log(day)
                        console.log({ date: dates, select: selectedDate })
                    }}
                    onYearChange={year => {
                        // optional
                        console.log(year)
                        console.log({ date: dates, select: selectedDate })
                    }} */
                    defaultValues={{
                        year: "YYYY",
                        month: "MM",
                        day: "DD",
                    }}
                />
            </div>
        </>
    )
}

export default Datepicker

Datepicker.propTypes = {
    label: PropTypes.string,
}

Datepicker.defaultProps = {
    label: "",
}
