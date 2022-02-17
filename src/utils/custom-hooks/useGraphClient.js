import { useMutation, useQuery, useSubscription } from "@apollo/client"

/**
 * @param options {import("@apollo/client").QueryHookOptions} - query options
 *
 */
export const useGraphQuery = (query, options = {}) => {
    const { loading, error, data, refetch } = useQuery(query, options)

    return { loading, error, data, refetch }
}
/**
 * @param options {import("@apollo/client").MutationHookOptions} - query options
 *
 */

export const useGraphMutation = (query, options = {}) => {
    const [callMutation, { loading, error, data }] = useMutation(query, options)

    return { loading, error, data, callMutation }
}

/**
 * @param options {import("@apollo/client").SubscriptionHookOptions} - query options
 *
 */

export const useGraphSubscription = (subscription, options = {}) => {
    const { loading, data } = useSubscription(subscription, options)

    return { loading, data }
}
