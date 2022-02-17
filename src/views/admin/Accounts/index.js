import React, { useCallback, useState } from "react"
import { useAsync, useMount } from "react-use"
import Icon from "../../../components/Icon"
import SearchBox from "../../../components/SearchBox"
import Button from "../../../components/Button"
import Pagination from "../../../components/Pagination"
import AccountTable from "./AccountsTable"
import { columnsClients, columnsUsers } from "./seed-table"
import ClientModal from "../../../components/Modal/ClientModal"
import { FIND_CLIENTS, FIND_USER } from "../../../graphql/querys/accounts"
import { useGraphQuery } from "../../../utils/custom-hooks/useGraphClient"
import edifice from "../../../assets/img/icons/edifice.png"

let refetchTimeout = null

export default function Accounts() {
    const [isClient, setIsClient] = useState(true)
    const [data, setData] = useState([])
    const [dataPagination, setDataPagination] = useState({})
    const [columns, setColumns] = useState([])

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

    const handleTab = useCallback(() => {
        setIsClient(prev => !prev)
    }, [])

    return (
        <>
            <div>
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2" role="presentation">
                        <button
                            className={`py-4 px-4 text-[16px] font-medium leading-[25px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center justify-center ${
                                isClient ? "text-primary-100" : "text-gray-500"
                            }`}
                            type="button"
                            onClick={handleTab}
                        >
                            <img
                                className={`pr-2 ${
                                    isClient ? "opacity-100" : "opacity-40"
                                }`}
                                src={edifice}
                                alt="clients"
                            />
                            Clients
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button
                            className={`py-4 px-4 text-[16px] font-medium leading-[17px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center ${
                                !isClient ? "text-primary-100" : "text-gray-500"
                            }`}
                            type="button"
                            onClick={handleTab}
                        >
                            <Icon type="person_outline" className="mr-1" />
                            Users
                        </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                <div className="p-4">
                    <div className="flex flex-row columns-3 items-center gap-6 mb-10">
                        <SearchBox
                            className="h-[40px] font-roboto text-[15px] text-neutral-gray-70 hover:bg-primary-100 "
                            onChange={handleFilter}
                        />

                        <div className="bg-white w-[6%] h-[40px] flex items-center justify-center rounded-md cursor-pointer font-roboto text-[15px] text-neutral-gray-70 hover:bg-primary-100 hover:text-white">
                            <Icon type="filter_alt" outline />
                        </div>
                        <Button
                            type="primary"
                            text={isClient ? "New Client" : "New User"}
                            className="w-[325px] h-[40px] font-roboto text-[15px] text-neutral-white tracking-[0.5px] leading-[17.58px] font-medium hover:bg-primary-100"
                            icon={
                                <Icon
                                    type="add_circle_outline"
                                    className="mr-1"
                                />
                            }
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
            <ClientModal open={false} />
        </>
    )
}
