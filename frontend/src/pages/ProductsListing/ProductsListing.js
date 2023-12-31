
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
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const dispatch = useDispatch();
    const { productList, loading, error, filteredProductList } = useSelector(state => state.products);

    const [sortType, setSortType] = useState('asc');
    const navigate = useNavigate()
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


        const sortedProducts = sortProducts(filteredProducts, sortType);

        dispatch(applyFilters(sortedProducts));
    }, [productList, sortType, filters, dispatch]);

    const addProduct = (product) => {
        const existProduct = productList.find(x => x.id === product.id)
        const count = existProduct ? existProduct + 1 : 1;
        dispatch(addToCart(product));
        navigate('/cart')
    };

    const handleSortChange = () => {
        const newSortType = sortType === 'asc' ? 'desc' : 'asc';
        setSortType(newSortType);

        const sortedProducts = [...productList].sort((a, b) => {

            if (sortType === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

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
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                        </select>
                        -
                        <select
                            value={filters.priceRange.max}
                            onChange={e => handleFilterChange('priceRange', { ...filters.priceRange, max: e.target.value })}
                        >
                            <option value="1000">Max Price</option>
                            <option value="1200">1200</option>
                            <option value="1500">1500</option>
                            <option value="2000">2000</option>
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.category} onChange={e => handleFilterChange('category', e.target.value)}>
                            <option value="">All Categories</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.clothingType} onChange={e => handleFilterChange('clothingType', e.target.value)}>
                            <option value="">All clothingType</option>
                            <option value="tshirt">Tshirt</option>
                            <option value="hoodie">Hoodie</option>
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.design} onChange={e => handleFilterChange('design', e.target.value)}>
                            <option value="">All Design</option>
                            <option value="solid">Solid</option>
                            <option value="printed">Printed</option>
                        </select>
                    </div>
                    <div className='filter-control'>

                        <select value={filters.brand} onChange={e => handleFilterChange('brand', e.target.value)}>
                            <option value="">All Brands</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                            <option value="zara">Zara</option>
                            <option value="puma">Puma</option>
                            <option value="h&m">H&M</option>
                            <option value="supreme">Supreme</option>
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

                            <Row className="product-container" style={{ marginTop: '4em' }}>
                                <div className="products" style={{ padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{productCard}</div>
                            </Row>

                        </>)
            }
        </div>
    );
};

export default Products;

