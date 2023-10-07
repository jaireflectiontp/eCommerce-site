import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import "../../assets/styles/index.scss";
import axios from 'axios';
import { useSelector } from 'react-redux';

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('')
    const [searchedProduct, setSearchedProduct] = useState('')
    const productCollection = useSelector((state) => state.cart);
    const currentUser = useSelector((state) => state.auth.currentUser);
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }


    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/products/${searchText}`);
            const result = await response.data
            console.log(result)
            setSearchedProduct(result)
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        const debounce = setTimeout(() => {
            fetchData();
        }, 100)
        return () => clearTimeout(debounce)
    }, [searchText])


    return (
        <Navbar bg="light" expand="lg" className={`mb-4 ${searchOpen ? 'search-open' : ''}`}>
            <Container>
                <Link className="nav-link nav-brand-link" to="/">
                    <img src={logo} alt="logo" style={{ width: "150px" }} />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center mx-3">
                        <Nav.Link className='nav-links' as={NavLink} to="/products" >Products</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link className='nav-links cart' as={NavLink} to="/cart"><ShoppingCartOutlinedIcon /><span
                            className={`cart-item-count ${productCollection.length === 0 ? "d-none" : "d-block"
                                }`}
                        >
                            {productCollection.length}
                        </span> Cart</Nav.Link>
                        <Nav.Link className='nav-links' as={Link} to={`${currentUser ? 'account' : 'signin'}`}><PersonOutlineOutlinedIcon />{
                            currentUser ? currentUser.firstName : 'Login'
                        }</Nav.Link>
                        <Nav.Link className='nav-links' as={NavLink} to="/contact"><PermPhoneMsgIcon /> Contact</Nav.Link>
                        <Nav.Link className='nav-links' onClick={toggleSearch}><i className="bi bi-search"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Form className={`d-lg-flex justify-content-center align-items-center position-relative ${searchOpen ? 'd-block' : 'd-none'}`}>
                <FormControl type="text" placeholder="Search here......" onChange={handleChange} style={{ width: '300px' }} className="mr-sm-2 mb-2 mb-lg-0" />
                <Button variant="outline-success" className="mr-2">Search</Button>
                <div className={`position-absolute search-suggestion ${searchText ? 'd-block' : 'd-none'}`} style={{ width: '300px' }}>
                    <div className='d-flex flex-column gap-2'>
                        {
                            searchedProduct && searchedProduct?.map((item) => {
                                return <Link onClick={() => setSearchText('')} className="w-100 text-decoration-none" to={`product/${item.slug}`}><img src={item.image} width={50} height={50} /> {item.name}</Link>
                            })
                        }
                    </div>
                </div>
            </Form>
        </Navbar>
    );
};

export default Header;
