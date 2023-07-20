import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    const params = useParams();
    const { title } = params
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
            const response = await axios.get(`/api/products/title/${title}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
            console.log('myproduct', response.data)

        } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message })
        }
    };

    useEffect(() => {
        fetchData();
    }, [title]);

    return (
        loading ?
            (<h2>Loading.....</h2>)
            : error ?
                (<h2>{error}</h2>)
                : (
                    <div>
                        <h1>{product.title}</h1>
                        <div>
                            <img src={product.image} alt="" style={{ width: '400px', height: '400px' }} />
                        </div>
                    </div>
                )
    )
}

export default ProductDetailsPage
