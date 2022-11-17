import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBRipple,
} from "mdb-react-ui-kit";
import StripeCheckout from "react-stripe-checkout";
const Key =
	"pk_test_51M1adEFZdcSYeJDmXyZVoElE9XQKTGyWHN4RwfcOqrvBBOuXp29GBXHvwRSuHbpSvoQQHxKDL4UBlxbC5PqJMlv100bsUoabB2";

//export default BasicExample;

const UsingFetch = () => {
	const [Object, setUsers] = useState([]);

	const fetchData = () => {
		fetch("http://localhost:8000/api/products/product")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div class="cards_container">
			{Object.length > 0 && (
				<div className="gridable">
					{Object.map((Object) => (
						<div>
							<div className="cards_content">
								<MDBContainer fluid className="my-5 text-center">
									<MDBCard>
										<MDBRipple
											rippleColor="light"
											rippleTag="div"
											className="bg-image rounded"
										>
											<Card.Link href={"/#/Product/" + Object._id}>
												<MDBCardImage
													src={Object.image}
													fluid
													className="w-100"
												/>
											</Card.Link>
											<a href="#!">
												<div className="mask">
													<div className="d-flex justify-content-start align-items-end h-100">
														<h5>
															<span className="badge bg-primary ms-2">
																Nouveauté
															</span>
														</h5>
													</div>
												</div>
												<div className="hover-overlay">
													<div
														className="mask"
														style={{
															backgroundColor: "rgba(251, 251, 251, 0.15)",
														}}
													></div>
												</div>
											</a>
										</MDBRipple>
										<MDBCardBody>
											<a href="#!" className="text-reset">
												<h5 className="card-title mb-3">{Object.name}</h5>
											</a>
											<a href="#!" className="text-reset">
												<p>{Object.category}</p>
											</a>
											<h6 className="mb-3">{Object.price}€</h6>
											<StripeCheckout
												name="NoName"
												image="https://image.shutterstock.com/image-vector/avatar-hacker-man-260nw-481229251.jpg"
												billingAddress
												shippingAddress
												description={"Your total is " + Object.price + "€"}
												amount={Object.price * 100}
												stripeKey={Key}
											>
												<Button variant="outline-success">J'achète</Button>
											</StripeCheckout>
										</MDBCardBody>
									</MDBCard>
								</MDBContainer>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default UsingFetch;
