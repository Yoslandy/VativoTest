import React from "react"
import { render, screen, waitFor, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Formik, Form } from "formik"

import InputMask from "./index"
import { masks } from "../../../utils/constants"

afterEach(() => {
    cleanup()
})

describe("<InputMask /> MASKS", () => {
    test("mask for phone input", async () => {
        const { container } = render(
            <Formik
                initialValues={{
                    phone: "",
                }}
            >
                {formik => {
                    const { values } = formik
                    return (
                        <Form>
                            <InputMask
                                name="phone"
                                placeholder="000-000-0000"
                                mask={masks.PHONE}
                                value={values.phone}
                            />
                        </Form>
                    )
                }}
            </Formik>
        )

        expect(await container.querySelector(`input[name="phone"]`))
            .toBeInDocument

        userEvent.type(
            await container.querySelector(`input[name="phone"]`),
            "123"
        )
        await waitFor(() => {
            expect(screen.getByDisplayValue("123-___-____")).toBeInDocument
        })
    })

    test("mask for FEIN input", async () => {
        const { container } = render(
            <Formik
                initialValues={{
                    fein: "",
                }}
            >
                {formik => {
                    const { values } = formik
                    return (
                        <Form>
                            <InputMask
                                name="fein"
                                placeholder="00-0000000"
                                mask={masks.FEIN}
                                value={values.fein}
                            />
                        </Form>
                    )
                }}
            </Formik>
        )

        expect(await container.querySelector(`input[name="fein"]`))
            .toBeInDocument

        userEvent.type(
            await container.querySelector(`input[name="fein"]`),
            "123"
        )
        await waitFor(() => {
            expect(screen.getByDisplayValue("12-3______")).toBeInDocument
        })
    })
})

describe("<InputMask /> SUFFIX PREFIX", () => {
    test("mask for Money input", async () => {
        const { container } = render(
            <Formik
                initialValues={{
                    money: "",
                }}
            >
                {formik => {
                    const { values } = formik
                    return (
                        <Form>
                            <InputMask
                                name="money"
                                placeholder="$ 00.00"
                                mask={masks.MONEY}
                                value={values.money}
                            />
                        </Form>
                    )
                }}
            </Formik>
        )

        expect(await container.querySelector(`input[name="money"]`))
            .toBeInDocument

        userEvent.type(
            await container.querySelector(`input[name="money"]`),
            "123.50"
        )
        await waitFor(() => {
            expect(screen.getByDisplayValue("$ 123.50")).toBeInDocument
        })
    })

    test("mask for Percentage input", async () => {
        const { container } = render(
            <Formik
                initialValues={{
                    percentage: "",
                }}
            >
                {formik => {
                    const { values } = formik
                    return (
                        <Form>
                            <InputMask
                                name="percentage"
                                placeholder="00.00 %"
                                mask={masks.PERCENTAGE}
                                value={values.percentage}
                            />
                        </Form>
                    )
                }}
            </Formik>
        )

        expect(await container.querySelector(`input[name="percentage"]`))
            .toBeInDocument

        userEvent.type(
            await container.querySelector(`input[name="percentage"]`),
            "12.3"
        )
        await waitFor(() => {
            expect(screen.getByDisplayValue("12.3 %")).toBeInDocument
        })
    })
})
