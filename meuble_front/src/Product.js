import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardLink,
} from "mdb-react-ui-kit";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const Key =
	"pk_test_51M1adEFZdcSYeJDmXyZVoElE9XQKTGyWHN4RwfcOqrvBBOuXp29GBXHvwRSuHbpSvoQQHxKDL4UBlxbC5PqJMlv100bsUoabB2";
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
			<MDBContainer fluid>
				<MDBCard className="text-black m-5" style={{borderRadius: "25px"}}>
					<MDBCardBody>
						<MDBRow>
							<MDBCol
								md="10"
								lg="6"
								className="order-2 order-lg-1 d-flex flex-column align-items-center"
							>
								<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
									{Product.name}
								</p>
								<p className="text-center">{Product.category}</p>
								<p className="text-center">{Product.description}</p>
								<p className="text-center priceProductCard ">
									{Product.price}€
								</p>
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
							</MDBCol>
							<MDBCol
								md="10"
								lg="6"
								className="order-1 order-lg-2 d-flex align-items-center"
							>
								<MDBCardImage src={Product.image} fluid />
							</MDBCol>
						</MDBRow>
						<MDBCardLink href={"/#/Review/" + Product._id}>Reviews</MDBCardLink>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
			<Footer />
		</div>
	);
}

export default Product;
