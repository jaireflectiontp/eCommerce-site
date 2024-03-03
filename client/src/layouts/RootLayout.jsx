import { Outlet } from "react-router-dom"
import Header from "./Header"


const RootLayout = () => {
    return (
        <>
            <header className="border-2"><Header /></header>
            <main><Outlet /></main>
            <footer>footer</footer>
        </>
    )
}

export default RootLayout
