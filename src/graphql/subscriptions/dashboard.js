import { gql } from "@apollo/client"

export const USERS_SUBSCRIPTION = gql`
    subscription users($limit: Int) {
        users(limit: $limit) {
            id
            name
            rocket
            timestamp
        }
    }
`

export const TODO_SUBSCRIPTION = gql`
    subscription {
        todoAdded {
            name
            description
        }
    }
`
