import React from "react"
import PropTypes from "prop-types"

// components

export default function CardTable({ color }) {
    return (
        <div
            className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${
                color === "light" ? "bg-white" : "bg-sky-900 text-white"
            }`}
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3
                            className={`font-semibold text-lg ${
                                color === "light"
                                    ? "text-slate-700"
                                    : "text-white"
                            }`}
                        >
                            Card Tables
                        </h3>
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            >
                                Project
                            </th>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            >
                                Budget
                            </th>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            >
                                Status
                            </th>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            >
                                Users
                            </th>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            >
                                Completion
                            </th>
                            <th
                                className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${
                                    color === "light"
                                        ? "bg-slate-50 text-slate-500 border-slate-100"
                                        : "bg-sky-800 text-sky-300 border-sky-700"
                                }`}
                            />
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

CardTable.defaultProps = {
    color: "light",
}

CardTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
}
