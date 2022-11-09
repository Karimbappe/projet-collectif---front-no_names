import React from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBInput,
	MDBIcon,
	MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import Button from 'react-bootstrap/Button';


const initFormData = Object({
	//declaration de l'objet initiale pour recevoir les credentials
	email: "",
	password: "",
});

const SignInForm = () => {
	//cette fonction englobe toute les function pour afficher et recuperer les credentials mais ne return que de l'html
	const [formData, updateFormData] = useState(initFormData); //[formDat = etat actuel de la valeur, UpdateFormData = redirige vers une fonction pour update l'etat de la valeur] useState(qui prend l'object initFormData),

	const handleChange = (elem) => {
		// console.log(elem)
		//cette fonction sert a map les credentials vers l'objet initFormData
		// elem = formData
		updateFormData({
			...formData, // ... = spread operator pour combiner 2 objects entre eux ici initFormData et le formulaire remplis par l'utilisateur

			[elem.target.name]: elem.target.value.trim(), //trim les espaces (ca n'a pas l'aire de fonctionner !!!)
		});
	};

	const handleSubmit = (elem) => {
		//elem = formDat
		elem.preventDefault(); //methode servant a gerer les erreurs

		console.log(formData); //submit formData to api @Karim
	};

	return (
		<>
			<Navbar />
			<MDBContainer fluid>
				<MDBCard className="text-black m-5" style={{borderRadius: "25px"}}>
					<MDBCardBody>
						<MDBRow>
							<MDBCol
								md="10"
								lg="6"
								className="order-2 order-lg-1 d-flex flex-column align-items-center">
								<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
									Se connecter
								</p>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBInput
										onChange={handleChange}
										id="typeEmail"
										type="email"
										name="email"
										placeholder="Email"
									/>
								</div>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBIcon fas icon="lock me-3" size="lg" />
									<MDBInput
										onChange={handleChange}
										placeholder="Password"
										id="form3"
										type="password"
										name="password"
									/>
								</div>

								<div className="mb-4">
									<MDBCheckbox
										name="flexCheck"
										value=""
										id="flexCheckDefault"
										label="Se souvenir de moi"
									/>
								</div>

								<MDBBtn className="mb-4" size="lg" onClick={handleSubmit}>
									Se connecter
								</MDBBtn>
							</MDBCol>

							<MDBCol
								md="10"
								lg="6"
								className="order-1 order-lg-2 d-flex align-items-center"
							>
								<MDBCardImage
									className="SignInFormaimg"
									src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
									fluid
								/>
								<Button variant="outline-success">Rechercher</Button>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
			<Footer />
		</>
	);
};


export default SignInForm;
