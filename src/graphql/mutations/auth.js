import { gql } from "@apollo/client"

export const LOGIN = gql`
    mutation login($data: LoginInput!) {
        login(login: $data)
    }
`
export const LOGOUT = gql`
    mutation logout {
        logout
    }
`
export const REFRESH = gql`
    mutation {
        refreshToken
    }
`

export const UPDATE_PASSWORD = gql`
    mutation updatePassword($data: PasswordInput!) {
        updatePassword(passwordInput: $data)
    }
`

export const CHANGE_PASSWORD = gql`
    mutation changePassword($data: ChangePasswordInput!) {
        changePassword(changePasswordInput: $data)
    }
`

export const FORGOT_PASSWORD = gql`
    mutation forgotPassword($data: ForgotPasswordInput!) {
        forgotPassword(forgotPasswordInput: $data)
    }
`
