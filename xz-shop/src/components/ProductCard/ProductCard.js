import { Rating } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
    const { product, addProduct } = props;
    return (
        <div>
            <Card
                key={product.id}
                className="h-100"
                style={{ width: "18rem", margin: "auto" }}
            >
                <div className="text-center">
                    <Link to={`/product/${product.slug}`}>
                        <Card.Img
                            variant="top"
                            src={product.image}
                            style={{ width: "100%" }}
                        />
                    </Link>
                </div>
                <Card.Body>
                    <Card.Title>
                        {" "}
                        <Link className="text-decoration-none text-secondary" style={{ fontSize: '1rem' }} to={`/product/${product.name}`}>{product.name}</Link>{" "}
                    </Card.Title>
                    <Card.Text>
                        <h4>INR : {product.price}</h4>
                        <Rating name="size-medium" defaultValue={2} />
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: "#fff" }}>
                    <Button variant="primary" onClick={() => addProduct(product)}>
                        Add to cart
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ProductCard;
