import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/slices/cartSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import LoadingComp from "../../components/common/LoadingComp";
import ErrorComp from "../../components/common/ErrorComp";
import { applyFilters, sortProducts } from "../../utils/sortUtils";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "../../assets/styles/index.scss"


const ProductListingPage = () => {
    const issue = useDispatch()
    const [sortingType, setSortingType] = useState('')


    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_REQ':
                return { ...state, loading: true }

            case 'FETCH_SUCCESS':
                return { ...state, products: action.payload, loading: false }

            case 'FETCH_FAIL':
                return { ...state, loading: false, error: action.payload }

            case 'SET_SORT_TYPE':
                return { ...state, sortType: action.payload };

            case 'SET_PRODUCTS':
                return { ...state, products: action.payload };
            case 'SET_FILTERS':
                return { ...state, filters: action.payload };
            default:
                return state
        }
    }

    const [{ loading, error, products, sortType, filters }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
        products: [],
        sortType: '',
        filters: {
            priceRange: { min: '', max: '' },
            clothingType: '', // 'shirt', 'pant', etc.
            category: '',     // 'men', 'women', etc.
        },
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


    const handleSortChange = (e) => {
        setSortingType(e.target.value);
        const newSortType = e.target.value;
        dispatch({ type: 'SET_SORT_TYPE', payload: newSortType });
    };

    const handleFilterChange = (type, value) => {
        dispatch({
            type: 'SET_FILTERS',
            payload: { ...filters, [type]: value },
        });
    };

    const filteredAndSortedProducts = sortProducts(
        applyFilters(products, filters),
        sortType
    );

    useEffect(() => {
        const sortedProductList = sortProducts(products, sortType);
        dispatch({ type: 'SET_PRODUCTS', payload: sortedProductList });
    }, [products, sortType]);



    const addProduct = (product) => {
        const existProduct = products.find(x => x.id === product.id)
        const count = existProduct ? existProduct + 1 : 1;
        console.log(count)
        issue(addToCart(product));
    };

    const productCard = products.map((product) => (
        <Col sm={6} md={4} lg={3} style={{ marginBottom: '40px' }}>
            <ProductCard product={product} addProduct={addProduct} />
        </Col>
    ))


    return (
        <div>
            <div>
                {/* Price Range Filter */}
                <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.priceRange.min}
                    onChange={(e) =>
                        handleFilterChange('priceRange', {
                            ...filters.priceRange,
                            min: e.target.value,
                        })
                    }
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.priceRange.max}
                    onChange={(e) =>
                        handleFilterChange('priceRange', {
                            ...filters.priceRange,
                            max: e.target.value,
                        })
                    }
                />

                {/* Clothing Type Filter */}
                <label>
                    <input
                        type="radio"
                        name="clothingType"
                        value="shirt"
                        checked={filters.clothingType === 'shirt'}
                        onChange={() => handleFilterChange('clothingType', 'shirt')}
                    />
                    Shirt
                </label>
                <label>
                    <input
                        type="radio"
                        name="clothingType"
                        value="pant"
                        checked={filters.clothingType === 'pant'}
                        onChange={() => handleFilterChange('clothingType', 'pant')}
                    />
                    Pant
                </label>

                {/* Category Filter */}
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="men"
                        checked={filters.category === 'men'}
                        onChange={() => handleFilterChange('category', 'men')}
                    />
                    Men
                </label>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="women"
                        checked={filters.category === 'women'}
                        onChange={() => handleFilterChange('category', 'women')}
                    />
                    Women
                </label>

                {/* Sorting Dropdown */}
                <select onChange={handleSortChange}>
                    <option value="">Sort By</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                    {/* ... (other sorting options) */}
                </select>

                {/* Render filtered and sorted productList */}
                <ul>
                    {filteredAndSortedProducts.map((product) => (
                        <li key={product.id}>{product.name} - {product.price}</li>
                    ))}
                </ul>
            </div>
            <div style={{ top: '9%', zIndex: '99', paddingBlock: '0.9em', background: 'rgb(248, 249, 250)' }} className=" position-sticky px-5 d-flex justify-content-between flex-wrap">
                <div className="filter-container d-flex align-items-center gap-2 flex-wrap">
                    <h4 style={{ margin: '0 1em 0 0' }}>FILTERS</h4>
                    <Box sx={{ width: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortingType}
                                label="Sort By"
                                onChange={handleSortChange}
                            >
                                <MenuItem value='asc'>Price: Low to High</MenuItem>
                                <MenuItem value='desc'>Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ width: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortingType}
                                label="Sort By"
                                onChange={handleSortChange}
                            >
                                <MenuItem value='asc'>Price: Low to High</MenuItem>
                                <MenuItem value='desc'>Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ width: 180 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sortingType}
                                label="Sort By"
                                onChange={handleSortChange}
                            >
                                <MenuItem value='asc'>Price: Low to High</MenuItem>
                                <MenuItem value='desc'>Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <Box sx={{ width: 180 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortingType}
                            label="Sort By"
                            onChange={handleSortChange}
                        >
                            <MenuItem value='asc'>Price: Low to High</MenuItem>
                            <MenuItem value='desc'>Price: High to Low</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            {
                loading ? <LoadingComp />
                    :
                    error ?
                        (<ErrorComp variant='danger' error={error} />)
                        :
                        (<>

                            <Row className="product-container">
                                <div className="products" style={{ padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{productCard}</div>
                            </Row>

                        </>)
            }
        </div>
    );
};

export default ProductListingPage;
