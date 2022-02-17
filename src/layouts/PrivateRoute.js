import React, { useEffect, useState } from "react"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import { refreshToken } from "../utils/services/refreshServices"

export default function PrivateRoute({ component: Component, ...rest }) {
    const [isLoggedIn, setIsLoggedIn] = useState()

    useEffect(() => {
        const init = async () => {
            const { data, error } = await refreshToken()
            if (data) setIsLoggedIn(true)
            if (error) setIsLoggedIn(false)
        }
        init()
    }, [])

    if (isLoggedIn === undefined) return <span>Loading...</span>

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/auth/login" />
                )
            }
        />
    )
}
PrivateRoute.propTypes = {
    component: PropTypes.node.isRequired,
}
