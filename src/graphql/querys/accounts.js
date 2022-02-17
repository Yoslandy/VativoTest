import { gql } from "@apollo/client"

export const FIND_USER = gql`
    query find_users(
        $filter: FilterInput
        $pagination: PaginationInput
        $order: OrderUserInput
    ) {
        findUsers(pagination: $pagination, filter: $filter, order: $order) {
            pageInfo {
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    firstName
                    lastName
                    email
                    role {
                        role
                    }
                    phone
                    client {
                        legalName
                    }
                }
            }
        }
    }
`

export const FIND_CLIENTS = gql`
    query find_clients(
        $filter: FilterInput
        $pagination: PaginationInput!
        $order: OrderClientInput
    ) {
        findClients(pagination: $pagination, filter: $filter, order: $order) {
            pageInfo {
                startCursor
                endCursor
                hasPreviousPage
                hasNextPage
            }
            edges {
                cursor
                node {
                    id
                    legalName
                    accountName
                    npi
                    groupId
                    contact {
                        id
                        name
                    }
                    email
                    ncpdp
                    nabp
                    timeZone
                    fein
                    phone
                    address
                    contractDate
                    rebatePercentage
                    brandRate
                    specialityRate
                    contractTerminationDate
                    accountManagerId
                    setupFee
                    processingFee
                    clientCode
                    isActive
                }
            }
        }
    }
`
