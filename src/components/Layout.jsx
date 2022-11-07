import { Suspense } from "react"
import { Outlet } from "react-router"
import { AppBar } from "./AppBar/AppBar"

export const Layout = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AppBar />
                <Outlet />
            </Suspense>
        </div>
    )
}