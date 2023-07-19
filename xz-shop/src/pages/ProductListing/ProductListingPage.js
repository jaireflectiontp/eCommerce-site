import React from "react";
import { useEffect } from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../services/slices/cartSlice";
import { fetchProductsAsync, selectError, selectLoading, selectProducts } from "../../services/slices/productSlice";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductListingPage = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    /* const [products, setProducts] = useState([]);
     const fetchData = async () => {
         try {
             const response = await axios.get("/api/products");
             setProducts(response.data);
 
         } catch (err) {
             console.log("Error", err);
         }
     };
 
     useEffect(() => {
         fetchData();
     }, []);*/


    console.log('product', products);
    const addProduct = (product) => {
        dispatch(addToCart(product));
    };

    const productCard = products.map((product) => (
        <Col sm={6} md={4} lg={3} style={{ marginBottom: '40px' }}>
            <ProductCard product={product} addProduct={addProduct} />
        </Col>
    ))

    return (
        <div>
            <h1>Product Dashboard</h1>
            <Row>
                <div className="products" style={{ padding: '15px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{productCard}</div>
            </Row>
        </div>
    );
};

export default ProductListingPage;
