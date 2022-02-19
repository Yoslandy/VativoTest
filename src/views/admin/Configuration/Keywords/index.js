import React, { /* useCallback, */ useState } from "react"
import { useHistory } from "react-router-dom"
/* import { Redirect } from "react-router" */
import { useAsync /* , useMount  */ } from "react-use"

import SearchBox from "../../../../components/SearchBox"
import Icon from "../../../../components/Icon"
import Button from "../../../../components/Button"
import Pagination from "../../../../components/Pagination"
import { columnsKeywords } from "./seed-table"
import AccountTable from "../../Accounts/AccountsTable"
/* import AccountTable from "./AccountsTable" */

/* import { useGraphQuery } from "../../../utils/custom-hooks/useGraphClient"
import { FIND_KEYWORDS } from "../../../graphql/querys/configuration" */
import Dropdown from "../../../../components/Dropdown"
import ConfigHeader from "../config-header"

const dataKeys = [
    {
        id: 1,
        date: "25/05/2022",
        client: "Pedrito Perez",
        type: "type",
        keyword: "test",
        name: "BIN",
        default: "IRX",
    },
]

// components

/* let refetchTimeout = null */
const dropdownOptions = [
    {
        label: "All Users",
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

export default function Settings() {
    /* const [isClient , setIsClient] = useState(true) */
    const [dataPagination /* setDataPagination */] = useState({})
    const [data, setData] = useState(dataKeys)
    const [columns, setColumns] = useState([])

    const history = useHistory()

    /* const { refetch } = useGraphQuery(FIND_KEYWORDS, {
        variables: {
            pagination: {},
            filter: { value: "" },
            order: {},
        },
    }) */

    /* useMount(async () => {
        const keysData = await refetch()
        setData(keysData)
    }) */

    useAsync(async () => {
        /* const keyData = await refetch() */
        setColumns(columnsKeywords)
        /* setDataPagination(keyData?.data?.findKeywords?.pageInfo) */
        return setData(dataKeys)
    }, [])

    const getData = () => {
        const keyData = (data /* ?.data?.findKeywords?.edges */ || []).map(
            u => ({
                date: u.date,
                client: u.client,
                keyword: u.keyword,
                type: u.type,
                name: u.name,
                default: u.default,
            })
        )
        return keyData
    }

    /* const refetchData = useCallback(async value => {
        const keyData = await refetch({
            pagination: {},
            filter: { value },
        })
        setDataPagination(keyData?.data?.findKeywords?.pageInfo)
        return setData(keyData)
    }, []) */

    const handleFilter = (/* value */) => {
        /* clearTimeout(refetchTimeout) */
        /* refetchTimeout = setTimeout(() => refetchData(value), 800) */
    }

    return (
        <>
            <ConfigHeader />
            <div id="myTabContent">
                <div className="p-4">
                    <div className="flex flex-row columns-4 items-center gap-6 mb-10">
                        <div className="w-[33%]">
                            <Dropdown
                                className="h-[40px] font-roboto"
                                options={dropdownOptions}
                            />
                        </div>

                        <SearchBox
                            className="h-[40px] font-roboto text-[15px] text-neutral-gray-70 hover:bg-primary-100 "
                            onChange={handleFilter}
                        />
                        <div className="bg-white w-[6%] h-[40px] flex items-center justify-center rounded-md cursor-pointer font-roboto text-[15px] text-neutral-gray-70 hover:bg-primary-100 hover:text-white">
                            <Icon type="filter_alt" outline />
                        </div>
                        <Button
                            type="primary"
                            text="New Keyword"
                            /* {isClient ? "New Client" : "New User"} */
                            className="w-[325px] h-[40px] font-roboto text-[15px] text-neutral-white tracking-[0.5px] leading-[17.58px] font-medium hover:bg-primary-100"
                            icon={
                                <Icon
                                    type="add_circle_outline"
                                    className="mr-1"
                                />
                            }
                            onClick={() => {
                                history.push(
                                    "/admin/configuration/create_keyword"
                                )
                            }}
                        />
                    </div>
                    <div className="w-full overflow-x-auto ThinScrollbar">
                        <AccountTable columns={columns} data={getData()} />
                    </div>
                    <Pagination
                        dataPagination={dataPagination}
                        className="mt-4"
                    />
                </div>
            </div>
        </>
    )
}
