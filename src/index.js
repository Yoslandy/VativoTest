import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"
import { ApolloProvider } from "@apollo/client"
import { QueryParamProvider } from "use-query-params"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/styles/build.css"
import "@themesberg/flowbite"

// layouts

import Admin from "./layouts/Admin"
import Auth from "./layouts/Auth"
import Notification from "./components/Notification"
import PrivateRoute from "./layouts/PrivateRoute"
import { client } from "./utils/apollo-client"

ReactDOM.render(
    <ApolloProvider client={client}>
        <ToastProvider
            components={{ Toast: Notification }}
            placement="bottom-right"
        >
            <Suspense fallback={<span>Loading...</span>}>
                <BrowserRouter>
                    <QueryParamProvider ReactRouterRoute={Route}>
                        <Switch>
                            <Route path="/auth" component={Auth} />
                            <PrivateRoute component={Admin} />
                        </Switch>
                    </QueryParamProvider>
                </BrowserRouter>
            </Suspense>
        </ToastProvider>
    </ApolloProvider>,
    document.getElementById("root")
)
