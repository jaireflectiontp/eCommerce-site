import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./index.scss";
const NavigationBar = () => {
  const pro = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-brand">
        <Link className="nav-link nav-brand-link" to="/">
          <img src={logo} alt="logo" style={{ width: "150px" }} />
        </Link>
      </div>
      <div className="search-bar">
        <div className="search-control">
          <input type="text" placeholder="Search here......" />
          <span>
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="navigation">
        <div className="nav-tabs">
          <Link className="navi-link" as={Link} to="/signin">
            Track Order
          </Link>
        </div>
        <div className="nav-tabs">
          <Link className="navi-link" as={Link} to="/signin">
            Login
            <PersonOutlineOutlinedIcon />
          </Link>
        </div>
        <div className="nav-tabs">
          <Link className="navi-link" as={Link} to="/signin">
            Wishlist <FavoriteBorderIcon />
          </Link>
        </div>
        <div className="nav-tabs">
          <Link className="navi-link cart-link" as={Link} to="/cart">
            <span className="link-text">Cart</span>
            <span className="cart-wrap">
              <ShoppingCartOutlinedIcon />
              <span
                className={`cart-item-count ${
                  pro.length === 0 ? "d-none" : "d-block"
                }`}
              >
                {pro.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Text>
                <h4 style={{ margin: "0 10px 0 30px" }}>1880-188-801</h4>
              </Navbar.Text>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mx-2">
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>

            <Nav.Link className="mx-2" as={Link} to="/signin">
              <PersonIcon />
              Login
            </Nav.Link>
            <Nav.Link className="mx-2 cart-link" as={Link} to="/cart">
              <ShoppingCartIcon />
              <span
                className={`cart-item-count ${
                  pro.length === 0 ? "d-none" : "d-block"
                }`}
              >
                {pro.length}
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
              </Navbar>*/}
    </nav>
  );
};

export default NavigationBar;
