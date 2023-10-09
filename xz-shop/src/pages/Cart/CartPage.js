import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../services/slices/cartSlice";
import emptyCartImg from "../../assets/images/empty-cart.png"
import { Link } from "react-router-dom";
import "../../assets/styles/index.scss"
const CartPage = () => {
    const cartProduct = useSelector((state) => state.cart);
    const loggedUser = useSelector((state) => state.auth.currentUser)

    const dispatch = useDispatch();
    const removeProduct = (id) => {
        console.log(id);
        dispatch(removeFromCart(id));
    };

    const productCard = cartProduct.map((product) => (
        <div className="col-md-3" style={{ marginBottom: "20px" }}>
            <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "150px", height: "180px" }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{product.slug}</Card.Title>
                    <Card.Text>
                        <h4>INR : {product.price}</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "#fff" }}>
                    <Button variant="danger" onClick={() => removeProduct(product.id)}>
                        remove to cart
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    return (
        <div>
            {
                productCard.length == 0 &&
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <div className="empty-cart-display">
                        <img src={emptyCartImg} alt="empty cart" width={'400px'} />
                        <h4 className="mb-4">Your cart is empty</h4>
                        <button className="empty-cart-btn"><Link to='/products' >Continue Shopping</Link></button>
                    </div>
                </div>
            }
            {productCard}
        </div>
    );
};

export default CartPage;
