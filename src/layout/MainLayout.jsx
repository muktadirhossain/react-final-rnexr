import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="dark:bg-slate-900 min-h-screen dark:text-slate-400">
            {<Outlet />}
        </div>
    )
}

export default MainLayout