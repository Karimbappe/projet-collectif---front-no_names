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
import { useNavigate } from "react-router-dom";



const SignInForm = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate =useNavigate()


	const handleLogin = async () => {
		console.warn({email,password})
		let result = await fetch("http://localhost:8000/api/auth/login", {
        method: 'post',
        body: JSON.stringify({email, password }),
        headers: {
          'Content-Type': 'application/json',

        }
      })
	  

	  if(result){
		result= await result.json()
		console.warn(result)
		localStorage.setItem("user",(JSON.stringify(result)))
		localStorage.setItem("token",( JSON.stringify(result.accessToken)))
      navigate('/')
	  }else{
		alert("incorrect passord or email please try again")
	  }
	}


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
									Se connecter
								</p>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBInput
										id="typeEmail"
										type="email"
										name="email"
										placeholder="Email"
										value={email}
                    onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div className="d-flex flex-row align-items-center mb-4">
									<MDBIcon fas icon="lock me-3" size="lg" />
									<MDBInput
										placeholder="Password"
										id="form3"
										type="password"
										name="password"
										value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

								<MDBBtn className="mb-4" size="lg" onClick={handleLogin} >
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

export default SignInForm;
