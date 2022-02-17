/* eslint-disable no-console */
import React, { useEffect, useState } from "react"
import { v4 as uuid4 } from "uuid"
import { TODO_SUBSCRIPTION } from "../../graphql/subscriptions/dashboard"
import Button from "../Button"
import { FIND_USER } from "../../graphql/querys/dashboard"
import { INSERT_USER } from "../../graphql/mutations/dashboard"
import {
    useGraphMutation,
    useGraphQuery,
    useGraphSubscription,
} from "../../utils/custom-hooks/useGraphClient"
import Table from "../Table/Table"
import TableHeader from "../Table/TableHeader"
import TableBody from "../Table/TableBody"

// components

export default function CardPageVisits() {
    const [todoList, setTodoList] = useState([])
    const { loading } = useGraphQuery(FIND_USER)

    const { callMutation } = useGraphMutation(INSERT_USER)

    const { data: subscriptionData } = useGraphSubscription(
        TODO_SUBSCRIPTION,
        {}
    )

    // useEffect(() => {
    //     if (!data) return
    //     setTodoList(data.todo)
    // }, [data])

    useEffect(() => {
        if (!subscriptionData) return
        const newList = [...todoList, subscriptionData.todoAdded]
        setTodoList(newList)
    }, [subscriptionData])

    const insertRandomUser = async () => {
        const newUser = {
            name: "name".concat(uuid4()),
            description: "des".concat(uuid4()),
        }
        try {
            await callMutation({ variables: { data: newUser } })
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-slate-700 body-1">
                            Todo List
                        </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <Button
                            text="Add todo"
                            type="primary"
                            className="ml-auto"
                            onClick={insertRandomUser}
                        />
                    </div>
                </div>
            </div>
            <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <Table className="items-center w-full bg-transparent border-collapse">
                    <TableHeader>
                        <tr>
                            <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Name
                            </th>

                            <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Description
                            </th>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {todoList.map(ch => (
                            <tr key={uuid4()}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {ch.name}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                                    {ch.description}
                                </td>
                            </tr>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
