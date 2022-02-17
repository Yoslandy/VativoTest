import { REFRESH } from "../../graphql/mutations/auth"
import { client } from "../apollo-client"

export const refreshToken = () =>
    client
        .mutate({
            mutation: REFRESH,
        })
        .then(data => ({ data, error: null }))
        .catch(error => ({ data: null, error }))
