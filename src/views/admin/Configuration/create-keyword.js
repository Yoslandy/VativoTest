import React, { useState } from "react"
import * as Yup from "yup"
import { Form, Formik } from "formik"

/* import Icon from "../../../components/Icon" */
import Button from "../../../components/Button"
import ConfigHeader from "./config-header"
import DatePicker from "../../../components/Datepicker/index"
import Input from "../../../components/Input/index"
import Dropdown from "../../../components/Dropdown"
import "../../../assets/styles/configuration.css"

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
})

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

export default function CreateKeyword() {
    const [isError, setIsError] = useState(false)

    const hideErrorMessage = () => setIsError(false)

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
    return (
        <>
            <ConfigHeader />
            <div id="myTabContent">
                <div className="p-4 bg-white rounded-xl border w-100">
                    <h3 className="text-[24px] font-bold mb-8">
                        Create a Keyword
                    </h3>
                    <Formik
                        initialValues={{ password: "", email: "" }}
                        onSubmit={onSubmit}
                        validationSchema={SignupSchema}
                    >
                        {formik => {
                            const { errors, values } = formik
                            /* const getError = label => {
                                if (isError) return true
                                if (!values[label].length) return false
                                return errors[label]
                            } */

                            return (
                                <Form>
                                    <div className="createKeywordRow mb-6 gap-6">
                                        <div className="width-4">
                                            <DatePicker label="Date" />
                                        </div>
                                        <div className="width-4">
                                            <Input
                                                label="Client"
                                                value={values.email}
                                                className="h-[40px]  w-full"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onFocus={hideErrorMessage}
                                                error={isError || errors.email}
                                            />
                                        </div>
                                        <div className="width-4">
                                            <Dropdown
                                                label="Name in Switch"
                                                className="h-[40px] font-roboto"
                                                options={dropdownOptions}
                                            />
                                        </div>
                                    </div>
                                    <div className="createKeywordRow gap-6">
                                        <div className="width-4">
                                            <Input
                                                label="Keyword"
                                                value={values.email}
                                                className="h-[40px] w-full"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onFocus={hideErrorMessage}
                                                error={isError || errors.email}
                                            />
                                        </div>
                                        <div className="width-4">
                                            <Input
                                                label="Type"
                                                value={values.email}
                                                className="h-[40px]  w-full"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onFocus={hideErrorMessage}
                                                error={isError || errors.email}
                                            />
                                        </div>
                                        <div className="width-4">
                                            <Input
                                                label="Default Value"
                                                value={values.email}
                                                className="h-[40px]  w-full"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onFocus={hideErrorMessage}
                                                error={isError || errors.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="createKeywordRow  marginTop-30">
                                        <div>
                                            <div>Import</div>
                                            <div>Switch</div>
                                        </div>

                                        <div className="flex gap-6 width-6">
                                            <Button
                                                type="outline"
                                                text="Cancel"
                                                size="big"
                                                className=" h-[34px] font-roboto text-[13px] text-neutral-primary tracking-[0.5px] leading-[17.58px] font-medium hover:bg-primary-100"
                                                onClick={() => {}}
                                            />

                                            <Button
                                                type="primary"
                                                text="Create Keyword"
                                                size="big"
                                                className="padding-horizontal h-[34px] font-roboto text-[13px] text-neutral-white tracking-[0.5px] leading-[17.58px] font-medium hover:bg-primary-100"
                                                onClick={() => {}}
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
        </>
    )
}
