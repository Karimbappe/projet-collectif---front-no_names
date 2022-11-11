import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBRipple,
  } from "mdb-react-ui-kit";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const Key =
	"pk_test_51M1adEFZdcSYeJDmXyZVoElE9XQKTGyWHN4RwfcOqrvBBOuXp29GBXHvwRSuHbpSvoQQHxKDL4UBlxbC5PqJMlv100bsUoabB2";

const Result = () => {
	const params = useParams(); // This retrieves all the params defined for the url
	const paramsUrl = useParams();

	console.log(paramsUrl.category);

	const [Result, setResults] = useState([]);
	const fetchData = async () => {
		fetch(
			"http://localhost:8000/api/products/filter?name=" + paramsUrl.category
		)
			.then((response) => {
				var data = response.json();
				console.log(data);
				return data;
			})
			.then((data) => {
				if (data.length === 0) {
					console.log("was not found");
				} else {
					setResults(data);
				}
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Navbar />
			<h1 className="researchTitle">Affichage des résultats pour : {params.query} </h1>
			<div class="cards_container">
        {Result.length > 0 && (
          <div className="gridable">
            {Result.map((Result) => (
              <div>
              <div className='cards_content'>
                <MDBContainer fluid className="my-5 text-center">
                <MDBCard>
                <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded">
                <Card.Link href={"/#/Product/" + Result._id}><MDBCardImage
                src={Result.image}
                fluid
                className="w-100"/>
                </Card.Link>
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">Nouveauté</span>
                        </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}>
                      </div>
                  </div>
                </a>
          </MDBRipple>
          <MDBCardBody>
            <a href="#!" className="text-reset">
              <h5 className="card-title mb-3">{Result.name}</h5>
            </a>
            <a href="#!" className="text-reset">
              <p>{Result.category}</p>
            </a>
            <h6 className="mb-3">{Result.price}€</h6>
            <StripeCheckout
                      name="NoName"
                      image="https://image.shutterstock.com/image-vector/avatar-hacker-man-260nw-481229251.jpg"
                      billingAddress
                      shippingAddress
                      description={"Your total is " + Result.price + "€"}
                      amount={Object.price * 100}
                      stripeKey={Key}>
                      <Button variant="outline-success">J'achète</Button></StripeCheckout>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBContainer>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
			<Footer />
		</div>
	);
};

export default Result;
