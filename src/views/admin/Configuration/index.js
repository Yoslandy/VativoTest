import React, { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"
/* import { Redirect } from "react-router" */
import { useAsync, useMount } from "react-use"
import SearchBox from "../../../components/SearchBox"
import Icon from "../../../components/Icon"
import Button from "../../../components/Button"
import Pagination from "../../../components/Pagination"
import { columnsClients, columnsUsers } from "../Accounts/seed-table"
import AccountTable from "../Accounts/AccountsTable"
/* import AccountTable from "./AccountsTable" */

import { useGraphQuery } from "../../../utils/custom-hooks/useGraphClient"
import { FIND_CLIENTS, FIND_USER } from "../../../graphql/querys/accounts"
import Dropdown from "../../../components/Dropdown"
import ConfigHeader from "./config-header"

// components

let refetchTimeout = null
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
    const [isClient /* , setIsClient */] = useState(true)
    const [dataPagination, setDataPagination] = useState({})
    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])
    const history = useHistory()

    const { refetch } = useGraphQuery(FIND_USER, {
        variables: {
            pagination: {},
            filter: { value: "" },
            order: {},
        },
    })

    const { refetch: refetchClient } = useGraphQuery(FIND_CLIENTS, {
        variables: {
            pagination: {},
            filter: { value: "" },
            order: {},
        },
    })

    useMount(async () => {
        const clientsData = await refetchClient()
        setData(clientsData)
    })

    useAsync(async () => {
        if (isClient) {
            const clientData = await refetchClient()
            setColumns(columnsClients)
            setDataPagination(clientData?.data?.findClients?.pageInfo)
            return setData(clientData)
        }
        const userData = await refetch()
        setColumns(columnsUsers)
        setDataPagination(userData?.data?.findUsers?.pageInfo)
        return setData(userData)
    }, [isClient])

    const getData = () => {
        if (!isClient) {
            return (data?.data?.findUsers?.edges || []).map(u => ({
                firstName: u.node.firstName,
                lastName: u.node.lastName,
                email: u.node.email,
                role: u.node.role.role,
                phone: u.node.phone,
                legalName: u.node.client.legalName,
            }))
        }
        return (data?.data?.findClients?.edges || []).map(u => ({
            legalName: u.node.legalName,
            accountName: u.node.accountName,
            npi: u.node.npi,
            groupId: u.node.groupId,
            name: u.node.contact.name,
            email: u.node.email,
            timeZone: u.node.timeZone,
            fein: u.node.fein,
            phone: u.node.phone,
            address: u.node.address,
            contractDate: u.node.contractDate,
            rebatePercentage: u.node.rebatePercentage,
            brandRate: u.node.rebatePercentage,
            specialityRate: u.node.specialityRate,
            contractTerminationDate: u.node.contractTerminationDate,
            accountManagerId: u.node.accountManagerId,
            setupFee: u.node.setupFee,
            processingFee: u.node.processingFee,
            clientCode: u.node.clientCode,
            isActive: u.node.isActive,
        }))
    }

    const refetchData = useCallback(
        async value => {
            if (!isClient) {
                const userData = await refetch({
                    pagination: {},
                    filter: { value },
                })
                setDataPagination(userData?.data?.findUsers?.pageInfo)
                return setData(userData)
            }

            const clientData = await refetchClient({
                pagination: {},
                filter: { value },
            })
            setDataPagination(clientData?.data?.findClients?.pageInfo)
            return setData(clientData)
        },
        [isClient]
    )

    const handleFilter = value => {
        clearTimeout(refetchTimeout)
        refetchTimeout = setTimeout(() => refetchData(value), 800)
    }

    return (
        <>
            <ConfigHeader />
            <div id="myTabContent">
                <div className="p-4">
                    <div className="flex flex-row columns-4 items-center gap-6 mb-10">
                        <Dropdown
                            className="h-[40px] font-roboto"
                            options={dropdownOptions}
                        />
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
