import React, { useCallback, useState } from "react"
import { useHistory } from "react-router-dom"
import { ReactComponent as Keywords } from "../../../assets/img/icons/Configurations/keywords.svg"
import { ReactComponent as Invoices } from "../../../assets/img/icons/Configurations/invoices.svg"
import { ReactComponent as Switch } from "../../../assets/img/icons/Configurations/switch.svg"
import { ReactComponent as Medicines } from "../../../assets/img/icons/Configurations/medicines.svg"

export default function ConfigHeader() {
    /* const [isClient, setIsClient] = useState(true) */
    const [tabMenu, setTabMenu] = useState("keywords")
    const history = useHistory()
    const handleMenu = (menu, route) =>
        useCallback(() => {
            setTabMenu(menu)
            history.push(route)
        }, [])

    return (
        <div>
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2" role="presentation">
                    <button
                        className={`py-4 px-4 text-[16px] font-medium leading-[25px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center justify-center ${
                            tabMenu === "keywords"
                                ? "text-primary-100"
                                : "text-gray-500"
                        }`}
                        type="button"
                        onClick={handleMenu("keywords", "/admin/configuration")}
                    >
                        <div
                            className={`pr-2 ${
                                tabMenu === "keywords"
                                    ? "opacity-100"
                                    : "opacity-40"
                            }`}
                        >
                            <Keywords />
                        </div>
                        Keywords
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button
                        className={`py-4 px-4 text-[16px] font-medium leading-[17px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center ${
                            tabMenu === "invoices"
                                ? "text-primary-100"
                                : "text-gray-500"
                        }`}
                        type="button"
                        onClick={handleMenu("invoices")}
                    >
                        <div
                            className={`pr-2 mt-1 ${
                                tabMenu === "invoices"
                                    ? "opacity-100"
                                    : "opacity-40"
                            }`}
                        >
                            <Invoices />
                        </div>
                        Invoices
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button
                        className={`py-4 px-4 text-[16px] font-medium leading-[17px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center ${
                            tabMenu === "switch"
                                ? "text-primary-100"
                                : "text-gray-500"
                        }`}
                        type="button"
                        onClick={handleMenu("switch")}
                    >
                        <div
                            className={`pr-2 mt-2 ${
                                /* Arreglar los estilos del menu que quede alineado, lo hice manual con mt-2 */
                                tabMenu === "switch"
                                    ? "opacity-100"
                                    : "opacity-40"
                            }`}
                        >
                            <Switch />
                        </div>
                        Switch Settings
                    </button>
                </li>
                <li className="mr-2" role="presentation">
                    <button
                        className={`py-4 px-4 text-[16px] font-medium leading-[17px] tracking-[0.5px] text-center rounded-t-lg border-b-2 border-transparent flex items-center ${
                            tabMenu === "medicines"
                                ? "text-primary-100"
                                : "text-gray-500"
                        }`}
                        type="button"
                        onClick={handleMenu("medicines")}
                    >
                        <div
                            className={`pr-2 mt-2 ${
                                tabMenu === "medicines"
                                    ? "opacity-100"
                                    : "opacity-40"
                            }`}
                        >
                            <Medicines />
                        </div>
                        NPI/ Brand Medicines
                    </button>
                </li>
            </ul>
        </div>
    )
}
