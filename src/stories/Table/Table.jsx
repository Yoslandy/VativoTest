import React from "react"
import PropTypes from "prop-types"

import Table from "../../components/Table/Table"
import TableBody from "../../components/Table/TableBody"
import TableHeader from "../../components/Table/TableHeader"

export default function CustomTable({ className, color }) {
    const headers = ["Firstname", "Lastname", "Native", "User Preferred"]
    const data = [
        {
            first: "Spike",
            last: "Spiegel",
            native: "スパイク・スピーゲル",
            userPreferred: "Spike Spiegel",
        },
        {
            first: "Faye",
            last: "Valentine",
            native: "フェイ・バレンタイン",
            userPreferred: "Faye Valentine",
        },
        {
            first: "Jet",
            last: "Black",
            native: "ジェット・ブラック",
            userPreferred: "Jet Black",
        },
        {
            first: "Spike",
            last: "Spiegel",
            native: "スパイク・スピーゲル",
            userPreferred: "Spike Spiegel",
        },
    ]
    return (
        <Table className={className} color={color}>
            <TableHeader>
                <tr>
                    {headers.map(header => (
                        <th
                            className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                color === "light"
                                    ? "bg-slate-50 text-slate-500 border-slate-100"
                                    : "bg-sky-800 text-sky-300 border-sky-700"
                            }`}
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </TableHeader>
            <TableBody>
                {data.map(d => (
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            {d.first}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {d.last}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {d.native}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                            {d.userPreferred}
                        </td>
                    </tr>
                ))}
            </TableBody>
        </Table>
    )
}

CustomTable.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
}

CustomTable.defaultProps = {
    className: "",
    color: "light",
}
