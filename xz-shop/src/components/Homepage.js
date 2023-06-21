import React from "react";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link to="/">Dhahs</Link>
      <Link to="/cart">fgdfgf</Link>
      <Outlet />
    </div>
  );
};

export default Homepage;
