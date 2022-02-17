import React from "react"

// components

import Dropdown from "../../components/Dropdown"
import CardLineChart from "../../components/Cards/CardLineChart"
import CardBarChart from "../../components/Cards/CardBarChart"
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic"

export default function Dashboard() {
    const dropdownOptions = [
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

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                    <CardLineChart />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <CardBarChart />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-4/12 px-4">
                    <CardSocialTraffic />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                    <Dropdown
                        className="Test"
                        options={dropdownOptions}
                        label="Test"
                    />
                </div>
            </div>
        </>
    )
}
