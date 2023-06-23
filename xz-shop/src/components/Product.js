import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/slices/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const productCard = products.map((product) => (
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{productCard}</div>
    </div>
  );
};

export default Product;
