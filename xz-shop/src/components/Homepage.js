import React from "react";

import { Provider } from "react-redux";
import store from "../store/Store";
import { Outlet } from "react-router-dom";
import NavigationBar from "./nav";
const Homepage = () => {
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

export default Homepage;
