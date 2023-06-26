import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
const NavigationBar = () => {
  const pro = useSelector((state) => state.cart);
  return (
    <nav>
      <Navbar bg="light" expand="lg">
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
            <Nav.Link className="mx-2" as={Link} to="/cart">
              Cart{pro.length}
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/signin">
              login
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/signup">
              signp
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavigationBar;
