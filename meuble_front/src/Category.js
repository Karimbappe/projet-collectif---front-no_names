import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, {useEffect, useState} from "react";

import StripeCheckout from "react-stripe-checkout";
const Key =
	"pk_test_51M1adEFZdcSYeJDmXyZVoElE9XQKTGyWHN4RwfcOqrvBBOuXp29GBXHvwRSuHbpSvoQQHxKDL4UBlxbC5PqJMlv100bsUoabB2";

//export default BasicExample;

const Category = () => {
	const [Object, setUsers] = useState([]);
	const fetchData = () => {
		fetch("http://localhost:8000/api/products/filter?category=Chaise")
			.then((response) => {
				var data = response.json();
				console.log(data);
				return data;
			})
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Navbar />
			<div class="cards_container">
				{Object.length > 0 && (
					<div className="gridable">
						{Object.map((Object) => (
							<div>
								<div className="cards_content">
									<Card href="/#/Product">
										<Card.Link href={"/#/Product/" + Object._id}>
											<Card.Img
												className="imgcart"
												variant="top"
												src={Object.image}
											/>
										</Card.Link>
										<Card.Body>
											<Card.Title>{Object.name}</Card.Title>
											<Card.Text>{Object.color}</Card.Text>
											<Card.Text>{Object.price} €</Card.Text>
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

export default Category;
