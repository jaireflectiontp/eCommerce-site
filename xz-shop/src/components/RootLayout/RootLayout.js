import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../services/store";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../../components/Navbar/Navbar";
import { loginUser } from "../../services/slices/authSlice";
const RootLayout = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    const userFromSessionStorage = JSON.parse(sessionStorage.getItem('currentUser'));
    if (userFromSessionStorage) {
        store.dispatch(loginUser(userFromSessionStorage));
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div>
            <Provider store={store}>
                <header style={{ backgroundColor: "#f6fff8", zIndex: "1" }} className="px-4 sticky-top"><Header /></header>
                <main>
                    <Outlet />
                </main>
                <footer className={`py-4 ${currentPath == "/signin" || currentPath === "/signup" ? "d-none" : "d-block"}`} style={{ backgroundColor: '#1d2d44', color: '#d8e1e9' }}>
                    <Footer />
                </footer>
            </Provider>
        </div>
    );
};

export default RootLayout;

