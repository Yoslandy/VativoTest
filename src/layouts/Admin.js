import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"
import routes from "./routes"

export default function Admin() {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-[245px]">
                <div className="p-8 md:p-8 mx-auto w-full min-h-[100vh] bg-light-brown-90">
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                        <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                </div>
            </div>
        </>
    )
}
