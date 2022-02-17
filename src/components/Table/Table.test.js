import React from "react"
import { MemoryRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import Table from "./Table"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

test("Renders Table form correctly", () => {
    const component = renderer.create(
        <MemoryRouter>
            <Table className="items-center w-full bg-transparent border-collapse">
                <TableHeader>
                    <tr>
                        <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Firstname
                        </th>
                        <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Lastname
                        </th>
                        <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Native
                        </th>
                        <th className="px-6 bg-slate-50 text-slate-500 align-middle border border-solid border-slate-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            User Preferred
                        </th>
                    </tr>
                </TableHeader>
                <TableBody>
                    <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                            Spike
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            Spiegel
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            スパイク・スピーゲル
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                            Spike Spiegel
                        </td>
                    </tr>
                </TableBody>
            </Table>
        </MemoryRouter>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})
