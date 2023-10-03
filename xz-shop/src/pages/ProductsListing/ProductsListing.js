
// ProductListing.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyFilters, fetchProductsAsync, setProducts } from '../../services/slices/productSlice';
import LoadingComp from '../../components/common/LoadingComp';
import ErrorComp from '../../components/common/ErrorComp';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../components/ProductCard/ProductCard';
import { addToCart } from '../../services/slices/cartSlice';
import { sortProducts } from '../../utils/sortUtils';
import '../../assets/styles/index.scss'
const Products = () => {
    const dispatch = useDispatch();
    const { productList, loading, error, filteredProductList } = useSelector(state => state.products);

    const [sortType, setSortType] = useState('asc');

    const [filters, setFilters] = useState({
        priceRange: { min: 0, max: 1000 },
        category: '',
        brand: '',
        clothingType: '',
        design: '',
    });

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    useEffect(() => {
        // Apply filters
        let filteredProducts = productList;

        if (filters.priceRange) {
            filteredProducts = filteredProducts.filter(product =>
                product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
            );
        }

        if (filters.category) {
            filteredProducts = filteredProducts.filter(product =>
                product.category === filters.category
            );
        }

        if (filters.brand) {
            filteredProducts = filteredProducts.filter(product =>
                product.brand === filters.brand
            );
        }
        if (filters.clothingType) {
            filteredProducts = filteredProducts.filter(product =>
                product.clothingType === filters.clothingType
            );
        }
        if (filters.design) {
            filteredProducts = filteredProducts.filter(product =>
                product.design === filters.design
            );
        }

        // Sort filtered products
        const sortedProducts = sortProducts(filteredProducts, sortType);

        // Update filtered and sorted product list in the Redux store
        dispatch(applyFilters(sortedProducts));
    }, [productList, sortType, filters, dispatch]);

    const addProduct = (product) => {
        const existProduct = productList.find(x => x.id === product.id)
        const count = existProduct ? existProduct + 1 : 1;
        console.log(count)
        dispatch(addToCart(product));
    };

    const handleSortChange = () => {
        const newSortType = sortType === 'asc' ? 'desc' : 'asc';
        setSortType(newSortType);

        // Clone the array before sorting to avoid modifying the original state 
        const sortedProducts = [...productList].sort((a, b) => {

            if (sortType === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        console.log('sort', sortedProducts)
        // Dispatch action to update the sorted product list in Redux store
        dispatch(setProducts(sortedProducts));
    };
    const handleFilterChange = (filterType, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };





    const productCard = filteredProductList?.map((product) => (
        <Col sm={6} md={4} lg={3} style={{ marginBottom: '40px' }}>
            <ProductCard product={product} addProduct={addProduct} />
        </Col>
    ))

    return (
        <div>
            <h2>Product Listing</h2>
            <div className="filters">
                <button onClick={handleSortChange} className='product-sort-btn'>
                    Sort by Price ({sortType === 'asc' ? 'Low to High' : 'High to Low'})
                </button>

                <div className='filters-wrapper'>
                    <h5 className='mb-0'>Filters</h5>
                    <div className='filter-control'>

                        <select
                            value={filters.priceRange.min}
                            onChange={e => handleFilterChange('priceRange', { ...filters.priceRange, min: e.target.value })}
                        >
                            <option value="0">Min Price</option>
                            <option value="400">100</option>
                            <option value="200">200</option>
                            {/* Add other price options as needed */}
                        </select>
                        -
                        <select
                            value={filters.priceRange.max}
                            onChange={e => handleFilterChange('priceRange', { ...filters.priceRange, max: e.target.value })}
                        >
                            <option value="1000">Max Price</option>
                            <option value="490">490</option>
                            <option value="1000">1000</option>
                            {/* Add other price options as needed */}
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.category} onChange={e => handleFilterChange('category', e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="men">men</option>
                            <option value="women">women</option>
                            {/* Add other category options as needed */}
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.clothingType} onChange={e => handleFilterChange('clothingType', e.target.value)}>
                            <option value="">All clothingType</option>
                            <option value="tshirt">Tshirt</option>
                            <option value="hoodie">hoodie</option>
                            {/* Add other category options as needed */}
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.design} onChange={e => handleFilterChange('design', e.target.value)}>
                            <option value="">All Design</option>
                            <option value="solid">solid</option>
                            <option value="printed">printed</option>
                            {/* Add other category options as needed */}
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.brand} onChange={e => handleFilterChange('brand', e.target.value)}>
                            <option value="">All Brands</option>
                            <option value="nike">nike</option>
                            <option value="adibas">adibas</option>
                        </select>

                    </div>
                </div>
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

export default Products;

