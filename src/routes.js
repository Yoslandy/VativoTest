import { lazy } from "react"

const Dashboard = lazy(() => import("./views/admin/Dashboard"))
const Configuration = lazy(() => import("./views/admin/Configuration/Keywords"))
const Accounts = lazy(() => import("./views/admin/Accounts/index"))

const routes = [
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
        path: "/admin/accounts",
        exact: true,
        component: Accounts,
    },
]

export default routes
