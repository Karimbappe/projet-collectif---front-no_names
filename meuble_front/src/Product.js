//import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import StripeCheckout from 'react-stripe-checkout'

function Product() {
  const paramsUrl = useParams();

  console.log(paramsUrl._id);

  const [Product, setProduct] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:8000/api/products/find/" + paramsUrl._id)
      .then((response) => {
        let reponseData = response.json();
        return reponseData;
      })
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //return <h2>userId is 👉️ {params.userId}</h2>;

  return (
    <div>
      <Navbar />
      <div className="cards_container card_product">
        <div>
          <div className="cards_content">
            <Card href="/#/Product">
              <Card.Link href={"/#/Product/" + Product._id}>
                <Card.Img
                  className="imgcart"
                  variant="top"
                  src={Product.image}
                />
              </Card.Link>
              <Card.Body>
                <Card.Title>{Product.name}</Card.Title>
                <Card.Text>{Product.description}</Card.Text>
                <Card.Text>{Product.price} €</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
