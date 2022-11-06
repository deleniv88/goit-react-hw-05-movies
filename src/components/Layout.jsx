import { Suspense } from "react"
import { Outlet } from "react-router"
import { AppBar } from "./AppBar/AppBar"

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            </Suspense>
        </div>
    )
}