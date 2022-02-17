import React, { useState, useCallback } from "react"
import { Formik, Form } from "formik"
import { masks, dropdownOptions } from "../../../utils/constants"
import Icon from "../../../components/Icon"
import Input from "../../../components/Input"
import InputMask from "../../../components/Input/InputMask"
import Datepicker from "../../../components/Datepicker"
import Dropdown from "../../../components/Dropdown"
import Button from "../../../components/Button"
import "../../../assets/styles/createClient.css"
import edifice from "../../../assets/img/icons/edifice.png"
import PowerOn from "../../../assets/img/icons/power_on.svg"
import PowerOffGrey from "../../../assets/img/icons/power_off_grey.svg"

export default function CreateClient() {
    const [isClient, setIsClient] = useState(true)
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
            <div className="m-3 bg-light-brown-70 rounded-[14px] ClientFormContainer">
                <h2 className="font-roboto font-bold text-[24px] text-primary-120 mb-10">
                    Create a Client
                </h2>
                <div className="w-full">
                    <Formik>
                        <Form className="CreateClientForm">
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left ">
                                    <Input
                                        label="Legal Name"
                                        className="Input LegalName"
                                        placeholder="Enter name"
                                        type="text"
                                    />
                                    <Input
                                        label="Account Name"
                                        className="Input AcountName"
                                        placeholder="Enter account name"
                                        type="text"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="NPI"
                                        className="Input-small NPI"
                                        hint="6-digits number"
                                        placeholder="000000"
                                        type="number"
                                    />
                                    <Input
                                        label="Group ID"
                                        className="Input-small GroupID"
                                        hint="10-digits number"
                                        placeholder="0000000000"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Input
                                        label="Contact"
                                        className="Input Contact"
                                        placeholder="Enter contact name"
                                        type="text"
                                    />
                                    <Input
                                        label="Email"
                                        className="Input Email"
                                        placeholder="vativo@vativo.com"
                                        type="email"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="NCPDP"
                                        className="Input-small Client ID"
                                        hint="6-digits number"
                                        placeholder="000000"
                                        type="number"
                                    />
                                    <Input
                                        label="NABP"
                                        className="Input-small Fein"
                                        hint="7-digits number"
                                        placeholder="0000000"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Dropdown
                                        options={dropdownOptions}
                                        label="Timezone"
                                        className="Dropdown"
                                    />
                                    <InputMask
                                        label="Phone"
                                        className="Input Phone"
                                        mask={masks.PHONE}
                                        placeholder="Enter phone"
                                        type="phone"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="Client ID"
                                        className="Input-small Client ID"
                                        hint="11-digits number"
                                        placeholder="00000000000"
                                        type="number"
                                    />
                                    <InputMask
                                        label="Fein"
                                        className="Input-small Fein"
                                        mask={masks.FEIN}
                                        hint="9-digits number"
                                        placeholder="00-0000000"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Dropdown
                                        options={dropdownOptions}
                                        label="Client Parent"
                                        className="Dropdown ClientParent"
                                    />
                                    <Dropdown
                                        options={dropdownOptions}
                                        label="Service Type"
                                        className="Dropdown ServiceType"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="Rebate Percentage"
                                        className="Input-small Fein"
                                        placeholder="00%"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Datepicker label="Contract Date" />
                                    <Input
                                        label="Address"
                                        className="Input Address"
                                        placeholder="Enter address"
                                        component="textarea"
                                        rows={20}
                                    />
                                </div>
                                <div className="CreateClientForm-Right flex flex-col">
                                    <Input
                                        label="Brand Rate"
                                        className="Input-small RebatePercentage"
                                        placeholder="00%"
                                    />

                                    <Input
                                        label="Speciality Rate"
                                        className="Input-small SpecialityRate"
                                        placeholder="00%"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Input
                                        label="Account manager"
                                        className="Input AccountManager"
                                        placeholder="Enter name"
                                        type="text"
                                    />
                                    <Input
                                        label="Account id"
                                        className="Input AccountId"
                                        placeholder="Enter id"
                                        type="text"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <div className="w-full">
                                        <Input
                                            label="Account id"
                                            className="Input-big LegalName"
                                            placeholder="Enter number"
                                            type="text"
                                            hint="Comma separated"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Input
                                        label="Sales Rep Name"
                                        className="Input SalesRep"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <Input
                                        label="Sales Rep Last name"
                                        className="Input"
                                        placeholder="Last name"
                                        type="text"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="Processing Fee"
                                        className="Input-small ProcessingFee"
                                        placeholder="$.$$"
                                    />
                                    <Input
                                        label="Account Set Up Fee"
                                        className="Input-small AccountSetUpFee"
                                        placeholder="$$$$.$$"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-Row">
                                <div className="CreateClientForm-Left">
                                    <Datepicker label="Date" />
                                    <Input
                                        label="Client code"
                                        className="Input"
                                        placeholder="Enter code"
                                        type="text"
                                        hint="5 characters code"
                                    />
                                </div>
                                <div className="CreateClientForm-Right">
                                    <Input
                                        label="Sales Rep Percentage"
                                        className="Input-small AccountSetUpFee"
                                        placeholder="00%"
                                    />
                                </div>
                            </div>
                            <div className="CreateClientForm-SubmitRow flex flex-row justify-between items-start pt-1">
                                <div className="flex flex-col">
                                    <div className="flex mb-[14px] content-center">
                                        <img
                                            className="mr-[32px]"
                                            src={PowerOn}
                                            alt="PowerOn"
                                        />
                                        <div className="font-roboto text-[12px] text-primary-120 uppercase flex items-center">
                                            Activate
                                        </div>
                                    </div>
                                    <div className="flex content-center">
                                        <img
                                            className="mr-[32px]"
                                            src={PowerOffGrey}
                                            alt="PowerOffGrey"
                                        />
                                        <div className="font-roboto text-[12px] text-primary-120 uppercase flex items-center">
                                            Deactivate
                                        </div>
                                    </div>
                                </div>
                                <div className="SubmitRow-Right flex mt-auto">
                                    <Button
                                        className="w-[116px] h-[34px]"
                                        text="Cancel"
                                        type="outline"
                                    />
                                    <Button
                                        className="ml-[14px] w-[116px] h-[34px]"
                                        text="Create"
                                        type="primary"
                                    />
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
