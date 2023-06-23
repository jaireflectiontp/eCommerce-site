import React from "react";

import { Provider } from "react-redux";
import store from "../store/Store";
import { Outlet } from "react-router-dom";
import Navt from "./nav";
const Homepage = () => {
  return (
    <>
      <Provider store={store}>
        <Navt />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default Homepage;
