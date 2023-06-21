import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
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
          <Button variant="primary">Add to cart</Button>
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