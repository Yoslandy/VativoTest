import React from "react"
import { screen, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToastProvider } from "react-toast-notifications"
import { MockedProvider } from "@apollo/client/testing"

import { UPDATE_PASSWORD } from "graphql/mutations/auth"
import Notification from "../../../../components/Notification"
import ChangePassword from "../"

const oldPassword = "vativo123"
const newPassword = "vativo321"

const msgError = "Please, verify your info and try again."
const msgSuccess = "Your password was successfully updated."

const mockSuccessfully = [
    {
        request: {
            query: UPDATE_PASSWORD,
            variables: {
                data: {
                    newPassword,
                    oldPassword,
                },
            },
        },
        result: {
            data: { updatePassword: "Password changed successfully" },
        },
    },
]

describe("<ChangePassword />", () => {
    test(`onSubmit - ${msgError}`, async () => {
        const { container } = render(
            <ToastProvider
                components={{ Toast: Notification }}
                placement="bottom-right"
            >
                <MockedProvider mocks={[]} addTypename={false}>
                    <ChangePassword />
                </MockedProvider>
            </ToastProvider>
        )

        userEvent.type(
            await container.querySelector(`input[name="oldPassword"]`),
            oldPassword
        )
        userEvent.type(
            await container.querySelector(`input[name="password"]`),
            newPassword
        )
        userEvent.type(
            await container.querySelector(`input[name="confirmPassword"]`),
            newPassword
        )

        userEvent.click(await screen.getByText("Change Password"))

        await waitFor(() => {
            expect(screen.getAllByText(msgError)).toBeInDocument
        })
    })

    test(`onSubmit - ${msgSuccess}`, async () => {
        const { container } = render(
            <ToastProvider
                components={{ Toast: Notification }}
                placement="bottom-right"
            >
                <MockedProvider mocks={mockSuccessfully} addTypename={false}>
                    <ChangePassword />
                </MockedProvider>
            </ToastProvider>
        )

        userEvent.type(
            await container.querySelector(`input[name="oldPassword"]`),
            oldPassword
        )
        userEvent.type(
            await container.querySelector(`input[name="password"]`),
            newPassword
        )
        userEvent.type(
            await container.querySelector(`input[name="confirmPassword"]`),
            newPassword
        )

        userEvent.click(await screen.getByText("Change Password"))

        await waitFor(() => {
            expect(screen.getAllByText(msgSuccess)).toBeInDocument
        })
    })
})
