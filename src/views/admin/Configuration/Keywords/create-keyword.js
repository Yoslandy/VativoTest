import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import * as Yup from "yup"
import { Form, Formik } from "formik"
/* import ClientModal from "../../../components/Modal/ClientModal" */
import KeywordModal from "../../../../components/Modal/KeywordModal"
/* import Icon from "../../../components/Icon" */
import Button from "../../../../components/Button"
import ConfigHeader from "../config-header"
import DatePicker from "../../../../components/Datepicker/index"
import Input from "../../../../components/Input/index"
import Dropdown from "../../../../components/Dropdown"
/* import PowerOn from "../../../assets/img/icons/power_on.svg" */
import PowerOffGrey from "../../../../assets/img/icons/power_off_grey.svg"
import "../../../../assets/styles/configuration.css"

import { ReactComponent as ImportKeyword } from "../../../../assets/img/icons/Configurations/import_keyword.svg"

const dropdownOptions = [
    {
        label: "Opt 1",
        value: "1",
    },
    {
        label: "Opt 2",
        value: "2",
    },
    {
        label: "Opt 3",
        value: "3",
    },
]

export default function CreateKeyword() {
    const [isError, setIsError] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const hideErrorMessage = () => setIsError(false)

    const history = useHistory()

    const initialValues = {
        /* date: "", */
        client: "",
        /* name_switch: "", */
        keyword: "",
        type: "",
        default_value: "",
    }

    const validation = Yup.object().shape({
        /* date: Yup.string().required("Required"), */
        client: Yup.string().required("Required"),
        /* name_switch: Yup.string().required("Required"), */
        keyword: Yup.string().required("Required"),
        type: Yup.string().required("Required"),
        default_value: Yup.string().required("Required"),
    })

    const onSubmit = async values => {
        console.log(values)
        /* try {
            await callMutation({
                variables: {
                    data: values,
                },
            })
            setTimeout(() => {
                setIsSuccess(true)
            }, 800)
        } catch (error) {
            if (error.message === constant.INVALID_CREDENTIALS) {
                setIsError(true)
            }
        } */
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <ConfigHeader />
            <div id="myTabContent">
                <div className="p-4 bg-white rounded-xl border w-100 justify-center">
                    <h3 className="text-[24px] font-bold mb-8">
                        Create a Keyword
                    </h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validation}
                    >
                        {formik => {
                            const { errors, values } = formik
                            /* const getError = label => {
                                if (isError) return true
                                if (!values[label].length) return false
                                return errors[label]
                            } */

                            return (
                                <Form className="place-content-center">
                                    <div className="flex flex-row flex-wrap mb-6 gap-6">
                                        <DatePicker label="Date" />
                                        <Input
                                            label="Client"
                                            value={values.client}
                                            className="h-[40px] w-[300px]"
                                            type="text"
                                            name="client"
                                            placeholder="Enter client"
                                            onFocus={hideErrorMessage}
                                            error={isError || errors.client}
                                        />
                                        <Dropdown
                                            label="Name in Switch"
                                            name="name_switch"
                                            className="h-[40px] w-[300px] font-roboto"
                                            options={dropdownOptions}
                                            onFocus={hideErrorMessage}
                                            error={
                                                isError || errors.name_switch
                                            }
                                        />
                                        {/* </div>
                                    <div className="flex flex-row flex-wrap gap-6"> */}
                                        <Input
                                            label="Keyword"
                                            value={values.keyword}
                                            className="h-[40px] w-[300px]"
                                            type="text"
                                            name="keyword"
                                            placeholder="Enter keyword"
                                            onFocus={hideErrorMessage}
                                            error={isError || errors.keyword}
                                        />

                                        <Input
                                            label="Type"
                                            value={values.type}
                                            className="h-[40px]  w-[300px]"
                                            type="text"
                                            name="type"
                                            placeholder="Enter type"
                                            onFocus={hideErrorMessage}
                                            error={isError || errors.type}
                                        />

                                        <Input
                                            label="Default Value"
                                            value={values.default_value}
                                            className="h-[40px]  w-[300px]"
                                            type="text"
                                            name="default_value"
                                            placeholder="Enter default value"
                                            onFocus={hideErrorMessage}
                                            error={
                                                isError || errors.default_value
                                            }
                                        />
                                    </div>
                                    <div className="CreateClientForm-SubmitRow marginTop-30 mb-3 flex flex-row justify-between items-start pt-1">
                                        <div className="flex flex-col">
                                            <div
                                                className="flex mb-[14px] content-center ml-1 cursor-pointer"
                                                onClick={() => toggleModal()}
                                            >
                                                <div className="mr-[35px]">
                                                    <ImportKeyword />
                                                </div>
                                                <div className="font-roboto text-[12px] text-primary-120 uppercase flex items-center">
                                                    Import Keyword
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
                                                className="w-[200px] h-[34px]"
                                                text="Cancel"
                                                type="outline"
                                                onClick={() =>
                                                    history.push(
                                                        "/admin/configuration"
                                                    )
                                                }
                                            />
                                            <Button
                                                className=" ml-[14px] w-[100%] h-[34px]"
                                                text="Create Keyword"
                                                type="primary"
                                                submit
                                            />
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                    {/* <div className="flex flex-row columns-4 items-center gap-6 mb-10">
                        <div>
                            
                        </div>
                    </div> */}
                </div>
            </div>
            <KeywordModal
                open={modalOpen}
                title="Import Keyword"
                message="Fill in the following options to import a keyword."
                toggle={toggleModal}
            />
        </>
    )
}
