import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate, useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Rating } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../../services/slices/cartSlice';
import { useDispatch } from 'react-redux';
import ErrorComp from '../../components/common/ErrorComp';
import LoadingComp from '../../components/common/LoadingComp';
const ProductDetailsPage = () => {
    const dispatchProduct = useDispatch()
    const navigate = useNavigate()
    const params = useParams();
    const { slug } = params
    console.log('myproffduct', slug)

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_REQ':
                return { ...state, loading: true }

            case 'FETCH_SUCCESS':
                return { ...state, product: action.payload, loading: false }

            case 'FETCH_FAIL':
                return { ...state, loading: false, error: action.payload }

            default:
                return state
        }
    }
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        product: []
    })

    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQ' })
        try {
            const response = await axios.get(`/api/products/slug/${slug}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            console.log('myproduct', response.data)

        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
    };

    useEffect(() => {
        fetchData();
    }, [slug]);

    const addProductToCart = (product) => {
        dispatchProduct(addToCart(product))
        navigate("/cart")
    }

    return (
        <Container className='py-4'>{
            loading ?
                (<LoadingComp />)
                : error ?
                    (<ErrorComp variant='danger' error={error} />)
                    : (

                        <Row>
                            <Col md={6}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '80%' }} />
                            </Col>
                            <Col md={6} className='text-start'>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item><h2>{product.slug}</h2></ListGroup.Item>
                                    <ListGroup.Item><Rating></Rating></ListGroup.Item>
                                    <ListGroup.Item>
                                        <h3>&#8377; {product.price}</h3>
                                    </ListGroup.Item>
                                    <ListGroup.Item><h6>Description:</h6>
                                        <p>{product.description}</p>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col className='text-uppercase'>
                                                {
                                                    product.tags.oversized &&
                                                    <Badge style={{ borderRadius: '0' }} bg="secondary">{product.tags.oversized}</Badge>
                                                }{
                                                    product.tags.boyfriend &&
                                                    <Badge style={{ borderRadius: '0' }} bg="secondary">{product.tags.boyfriend}</Badge>
                                                }
                                                {
                                                    product.tags.plus &&
                                                    <Badge style={{ borderRadius: '0' }} bg="secondary">{product.tags.plus}</Badge>
                                                }
                                                &nbsp;
                                                <Badge style={{ borderRadius: '0' }} bg="info">{product.tags.cotton}</Badge>
                                            </Col>
                                            <Col>
                                                <span style={{ fontWeight: '600' }}>Status :&nbsp;&nbsp;</span>
                                                {
                                                    product.totalInStock > 0 ?
                                                        <Badge bg="success">Available in stock</Badge>
                                                        :
                                                        <Badge bg="danger">Out of stock</Badge>
                                                }
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {
                                        product.totalInStock > 0 &&
                                        <ListGroup.Item style={{ marginTop: '1rem' }}>
                                            <Row>
                                                <Col><Button onClick={() => addProductToCart(product)} className='w-100' style={{ backgroundColor: '#ffd84d', color: '#000', fontWeight: '500' }} variant="primary"> ADD TO CART</Button></Col>
                                                <Col> <Button className='w-100' variant="outline-secondary"><FavoriteBorderIcon /> WISHLIST</Button></Col>
                                            </Row>
                                        </ListGroup.Item>
                                    }
                                </ListGroup>
                            </Col>
                        </Row>
                    )}
        </Container>
    )
}

export default ProductDetailsPage
