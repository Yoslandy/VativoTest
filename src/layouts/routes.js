import React from "react"

const Accounts = React.lazy(() => import("../views/admin/Accounts"))
const Dashboard = React.lazy(() => import("../views/admin/Dashboard"))
const Configuration = React.lazy(() => import("../views/admin/Configuration"))
const ChangePassword = React.lazy(() => import("../views/admin/ChangePassword"))
const CreateClient = React.lazy(() =>
    import("../views/admin/Accounts/CreateClient")
)
const CreateKeyword = React.lazy(() =>
    import("../views/admin/Configuration/create-keyword")
)

const routes = [
    {
        path: "/admin/accounts",
        exact: true,
        component: Accounts,
    },
    {
        path: "/admin/dashboard",
        exact: true,
        component: Dashboard,
    },
    {
        path: "/admin/configuration",
        exact: true,
        component: Configuration,
    },
    {
        path: "/admin/password",
        exact: true,
        component: ChangePassword,
    },
    {
        path: "/admin/accounts/createClient",
        exact: true,
        component: CreateClient,
    },
    {
        path: "/admin/configuration/create_keyword",
        exact: true,
        component: CreateKeyword,
    },
]

export default routes
