import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/slices/cartSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

const ProductListingPage = () => {
    const dispat = useDispatch()

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_REQ':
                return { ...state, loading: true }

            case 'FETCH_SUCCESS':
                return { ...state, products: action.payload, loading: false }

            case 'FETCH_FAIL':
                return { ...state, loading: false, error: action.payload }

            default:
                return state
        }
    }
    const [{ loading, error, products }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        products: []
    })

    const fetchData = async () => {
        dispatch({ type: 'FETCH_REQ' })
        try {
            const response = await axios.get("/api/products");
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data })

        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log('product', products);
    const addProduct = (product) => {
        dispat(addToCart(product));
    };

    const productCard = products.map((product) => (
        <Col sm={6} md={4} lg={3} style={{ marginBottom: '40px' }}>
            <ProductCard product={product} addProduct={addProduct} />
        </Col>
    ))

    return (
        <div>
            {
                loading ? <h2>Loading....</h2>
                    :
                    <h2>{error}</h2>}
            <h1>Product Dashboard</h1>
            <Row>
                <div className="products" style={{ padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{productCard}</div>
            </Row>
        </div>
    );
};

export default ProductListingPage;
