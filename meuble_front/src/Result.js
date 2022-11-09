import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
		fetch("http://localhost:8000/api/products/filter?name=" + paramsUrl.category)
			.then((response) => {
				var data = response.json();
				console.log(data);
				return data;
			})
			.then((data) => {
				if (data.length == 0) {
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
			<h1> Search Results for : {params.query} </h1>
			<div class="cards_container">
				{Result.length > 0 && (
					<div className="gridable">
						{Result.map((Result) => (
							<div>
								<div className="cards_content">
									<Card href="/#/Product">
										<Card.Link href={"/#/Product/" + Result._id}>
											<Card.Img
												className="imgcart"
												variant="top"
												src={Result.image}
											/>
										</Card.Link>
										<Card.Body>
											<Card.Title>{Result.name}</Card.Title>
											<Card.Text>{Result.description}</Card.Text>
											<Card.Text>{Result.price} €</Card.Text>
											<StripeCheckout
												name="NoName"
												image="https://image.shutterstock.com/image-vector/avatar-hacker-man-260nw-481229251.jpg"
												billingAddress
												shippingAddress
												description="Your total is 1234€"
												amount={10000000}
												stripeKey={Key}
											>
												{" "}
												<Button variant="primary">Buy NOW !</Button>
											</StripeCheckout>
										</Card.Body>
									</Card>
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
