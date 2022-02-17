import { gql } from "@apollo/client"

export const INSERT_USER = gql`
    mutation insertTodo($data: TodoInput!) {
        addTodo(data: $data) {
            name
            description
        }
    }
`
