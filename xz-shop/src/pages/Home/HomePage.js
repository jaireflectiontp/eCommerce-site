import React from "react";

import { Provider } from "react-redux";
import store from "../../services/store";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Navbar/Navbar";
const HomePage = () => {
    return (
        <>
            <Provider store={store}>
                <NavigationBar />
                <main>
                    <Outlet />
                </main>
            </Provider>
        </>
    );
};

export default HomePage;
