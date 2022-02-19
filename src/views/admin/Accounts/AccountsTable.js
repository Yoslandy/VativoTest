import React from "react"
import PropTypes from "prop-types"
import { useTable, useSortBy } from "react-table"
import Icon from "../../../components/Icon"

export default function AccountsTable({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns,
                data,
            },
            useSortBy
        )

    const renderSortIcon = column => {
        if (column.isSorted) {
            if (column.isSortedDesc) {
                return (
                    <Icon type="arrow_downward" className="text-black ml-3" />
                )
            }
            return <Icon type="arrow_upward" className="text-black ml-3" />
        }
        return <Icon type="arrow_downward" className="text-primary-60 ml-3" />
    }

    return (
        <table
            {...getTableProps()}
            className="bg-white rounded-xl border w-full"
        >
            <thead className="border border-b-sky-100 h-[50px] font-roboto">
                {headerGroups.map(headerGroup => (
                    <tr
                        {...headerGroup.getHeaderGroupProps()}
                        className="text-left uppercase"
                    >
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                                className={`pl-3 ${
                                    column.isSorted
                                        ? "text-black"
                                        : "text-primary-60"
                                }  text-[12px] font-medium leading-[14.06px] tracking-[1.5px]`}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2">
                                        {renderSortIcon(column)}
                                    </span>
                                    {column.render("Header")}
                                </div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr
                            {...row.getRowProps()}
                            className="h-[50px] cursor-pointer"
                        >
                            {row.cells.map(cell => (
                                <td
                                    {...cell.getCellProps()}
                                    className="pl-6 text-neutral-black font-semibold text-[15px] leading-[17.58px] tracking-[0.5px] font-roboto"
                                >
                                    {cell.render("Cell")}
                                </td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

AccountsTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            Header: PropTypes.string,
            accessor: PropTypes.string,
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}
