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

// const initFormData = Object({
// 	//declaration de l'objet initiale pour recevoir les credentials
// 	username: "",
// 	email: "",
// 	password: "",
// 	// passwordCheck: "",ls
// });

const SignUpForm = () => {
	const [username, setuserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const handleChange = (elem) => {
	// 	updateFormData({
	// 		...formData,
	// 		[elem.target.name]: elem.target.value.trim(),
	// 	});
	// };

	const handleSubmit = async (elem) => {
		elem.preventDefault();
		let res = await fetch("localhost:8020/api/auth/register", {
			method: "POST",
			crossDomain: true,
			body: {
				username,
				email,
				password,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "done");
			});
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
								className="order-2 order-lg-1 d-flex flex-column align-items-center"
							>
								<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
									Sign up
								</p>

								<div className="d-flex flex-row align-items-center mb-4 ">
									<MDBIcon fas icon="user me-3" size="lg" />
									<MDBInput
										label="Votre Nom"
										id="form1"
										type="text"
										className="w-100"
										value={username}
										onChange={(e) => setuserName(e.target.value)}
									/>
								</div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label="S'abonner à la NewsLetter" />
              </div>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBIcon fas icon="lock me-3" size="lg" />
									<MDBInput
										label="Mot de passe"
										id="form3"
										type="password"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBIcon fas icon="key me-3" size="lg" />
									<MDBInput
										label="Confirmer votre mot de passe"
										id="form4"
										type="password"
										// onChange={handleChange}
										// name="passwordCheck"
									/>
								</div>

								<div className="mb-4">
									<MDBCheckbox
										name="flexCheck"
										value=""
										id="flexCheckDefault"
										label="Subscribe to our newsletter"
									/>
								</div>

								<MDBBtn className="mb-4" size="lg" onClick={handleSubmit}>
									Register
								</MDBBtn>
							</MDBCol>

							<MDBCol
								md="10"
								lg="6"
								className="order-1 order-lg-2 d-flex align-items-center"
							>
								<MDBCardImage
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
									fluid
								/>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>
			<Footer />
		</>
	);
};

export default SignUpForm;
