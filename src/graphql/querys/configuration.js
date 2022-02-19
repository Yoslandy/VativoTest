import { gql } from "@apollo/client"

export const FIND_KEYWORDS = gql`
    query find_keywords(
        $filter: FilterInput
        $pagination: PaginationInput!
        $order: OrderKeywordInput
    ) {
        findKeywords(pagination: $pagination, filter: $filter, order: $order) {
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
                    date
                    client
                    keyword
                    type
                }
            }
        }
    }
`
