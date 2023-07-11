import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../services/slices/cartSlice";
const CartPage = () => {
    const cartProduct = useSelector((state) => state.cart);
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
                    <Card.Title>{product.title}</Card.Title>
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
            <h1>cart</h1>
            {productCard}
        </div>
    );
};

export default CartPage;
