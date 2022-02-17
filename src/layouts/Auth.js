import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import PasswordSuccesfullyUpdated from "../views/auth/PasswordSuccessfullyUpdate"
import ChangePassword from "../views/auth/ChangePassword"
import ForgotPassword from "../views/auth/ForgotPassword"
import Login from "../views/auth/Login"
import Register from "../views/auth/Register"

export default function Auth() {
    return (
        <>
            {/* <Navbar transparent /> */}
            <main>
                <section className="relative w-full h-full min-h-screen flex justify-center items-center login-gradient">
                    <Switch>
                        <Route path="/auth/login" exact component={Login} />
                        <Route
                            path="/auth/forgot-password"
                            exact
                            component={ForgotPassword}
                        />
                        <Route
                            path="/auth/change-password"
                            exact
                            component={ChangePassword}
                        />
                        <Route
                            path="/auth/register"
                            exact
                            component={Register}
                        />
                        <Route
                            path="/auth/password-succesfully-updated"
                            exact
                            component={PasswordSuccesfullyUpdated}
                        />
                        <Redirect from="/auth" to="/auth/login" />
                    </Switch>
                </section>
            </main>
        </>
    )
}
