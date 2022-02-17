import { gql } from "@apollo/client"

export const GET_USERS = gql`
    query {
        todo {
            name
            description
        }
    }
`

export const FIND_USER = gql`
    query find_users {
        findUsers(pagination: { first: 1, last: 500 }) {
            edges {
                cursor
                node {
                    id
                    firstName
                    lastName
                    email
                }
            }
            pageInfo {
                startCursor
                endCursor
            }
        }
    }
`
