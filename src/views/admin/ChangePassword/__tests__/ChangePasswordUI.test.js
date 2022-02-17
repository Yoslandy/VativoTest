import React from "react"
import {
    screen,
    render,
    fireEvent,
    waitFor,
    cleanup,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ChangePasswordUI from "../ChangePasswordUI"
import { changePasswordSchema, initialData } from "../"

const onSubmit = jest.fn()
const onCancel = jest.fn()

afterEach(() => {
    cleanup()
})

describe("<ChangePasswordUI />", () => {
    test("All components are on the screen", async () => {
        const { container } = render(
            <ChangePasswordUI
                handleOnSubmit={onSubmit}
                handleOnCancel={onCancel}
                initialData={initialData}
                schema={changePasswordSchema}
            />
        )
        expect(await container.querySelector(`input[name="oldPassword"]`))
            .toBeInDocument
        expect(await container.querySelector(`input[name="password"]`))
            .toBeInDocument
        expect(await container.querySelector(`input[name="newPassword"]`))
            .toBeInDocument

        expect(await screen.getByText("Change Password")).toBeInDocument
        expect(await screen.getByText("Cancel")).toBeInDocument
    })

    test("Test button Cancel", async () => {
        render(
            <ChangePasswordUI
                handleOnSubmit={onSubmit}
                handleOnCancel={onCancel}
                initialData={initialData}
                schema={changePasswordSchema}
            />
        )

        fireEvent.click(await screen.getByText("Cancel"))
        expect(onCancel).toHaveBeenCalledTimes(1)
    })

    test("Test Submit form - successfully", async () => {
        const { container } = render(
            <ChangePasswordUI
                handleOnSubmit={onSubmit}
                handleOnCancel={onCancel}
                initialData={initialData}
                schema={changePasswordSchema}
            />
        )

        userEvent.type(
            await container.querySelector(`input[name="oldPassword"]`),
            "vativo123"
        )
        userEvent.type(
            await container.querySelector(`input[name="password"]`),
            "vativo321"
        )
        userEvent.type(
            await container.querySelector(`input[name="confirmPassword"]`),
            "vativo321"
        )

        userEvent.click(await screen.getByText("Change Password"))

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1)
        })
    })

    test(`Test Submit form - error: Password doesn't meet the policy requirements.`, async () => {
        const { container } = render(
            <ChangePasswordUI
                handleOnSubmit={onSubmit}
                handleOnCancel={onCancel}
                initialData={initialData}
                schema={changePasswordSchema}
            />
        )

        userEvent.type(
            await container.querySelector(`input[name="oldPassword"]`),
            "123"
        )

        userEvent.click(await screen.getByText("Change Password"))

        await waitFor(async () => {
            expect(
                await screen.findAllByText(
                    `Password doesn't meet the policy requirements.`
                )
            ).toBeInDocument
        })
    })

    test(`Test Submit form - error: Please make sure your passwords match`, async () => {
        const { container } = render(
            <ChangePasswordUI
                handleOnSubmit={onSubmit}
                handleOnCancel={onCancel}
                initialData={initialData}
                schema={changePasswordSchema}
            />
        )

        userEvent.type(
            await container.querySelector(`input[name="oldPassword"]`),
            "vativo123"
        )

        userEvent.click(await screen.getByText("Change Password"))

        userEvent.type(
            await container.querySelector(`input[name="password"]`),
            "vativo321a"
        )
        userEvent.type(
            await container.querySelector(`input[name="confirmPassword"]`),
            "vativo321b"
        )
        await waitFor(async () => {
            expect(
                await screen.findAllByText(
                    `Please make sure your passwords match`
                )
            ).toBeInDocument
        })
    })
})
