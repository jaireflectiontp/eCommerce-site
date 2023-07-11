import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from '@mui/icons-material/Menu';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CloseIcon from '@mui/icons-material/Close';
import "../../assets/styles/index.scss";
const NavigationBar = () => {
    const [openNav, setOpenNav] = useState(false)
    const pro = useSelector((state) => state.cart);
    return (
        <nav>
            <div className="nav-brand">
                <Link className="nav-link nav-brand-link" to="/" onClick={() => setOpenNav(false)}>
                    <img src={logo} alt="logo" style={{ width: "150px" }} />
                </Link>
            </div>
            <div className="menuIcon"><span className={openNav ? 'd-none' : 'd-block'} onClick={() => setOpenNav(!openNav)}><MenuIcon /></span><span className={openNav ? 'd-block' : 'd-none'} onClick={() => setOpenNav(!openNav)}><CloseIcon /></span></div>
            <div className={`navigation ${openNav ? 'd-flex' : 'd-non'}`}>
                <div className="nav-tabs">
                    <Link className="navi-link" as={Link} to="/signin" onClick={() => setOpenNav(false)}>
                        Track Order
                    </Link>
                </div>
                <div className="nav-tabs">
                    <Link className="navi-link" as={Link} to="/signin" onClick={() => setOpenNav(false)}>
                        Login
                        <PersonOutlineOutlinedIcon />
                    </Link>
                </div>
                <div className="nav-tabs">
                    <Link className="navi-link" as={Link} to="/signup" onClick={() => setOpenNav(false)}>
                        Wishlist <FavoriteBorderIcon />
                    </Link>
                </div>
                <div className="nav-tabs">
                    <Link className="navi-link" as={Link} to="/contact" onClick={() => setOpenNav(false)}>
                        Contact <PermPhoneMsgIcon />
                    </Link>
                </div>
                <div className="nav-tabs">
                    <Link className="navi-link cart-link" as={Link} to="/cart" onClick={() => setOpenNav(false)}>
                        <span className="link-text">Cart</span>
                        <span className="cart-wrap">
                            <ShoppingCartOutlinedIcon />
                            <span
                                className={`cart-item-count ${pro.length === 0 ? "d-none" : "d-block"
                                    }`}
                            >
                                {pro.length}
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="search-bar">
                <div className="search-control">
                    <input type="text" placeholder="Search here......" />
                    <span>
                        <SearchIcon />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
