import { Outlet } from "react-router-dom"
import Header from "./Header"
import { BreadCrumb } from "../components"
import Footer from "./Footer"


const RootLayout = () => {
    return (
        <>
            <header className="border-2"><Header /></header>
            <main className="w-full h-full">
                <BreadCrumb />
                <Outlet /></main>
            <footer><Footer /></footer>
        </>
    )
}

export default RootLayout
