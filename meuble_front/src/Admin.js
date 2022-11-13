import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
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

const Admin = () =>{

	return(
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
									Admin page
								</p>

								<MDBBtn className="mb-4" size="lg" href="./#/ProductList" >
									Products List
								</MDBBtn>
								<MDBBtn className="mb-4" size="lg" href="./#/UserList" >
									Users List
								</MDBBtn>
							</MDBCol>

							<MDBCol
								md="10"
								lg="6"
								className="order-1 order-lg-2 d-flex align-items-center"
							>
								<MDBCardImage
									className="SignInFormaimg"
									src="https://cdn.dribbble.com/users/3593/screenshots/2475280/linechart.gif"
									fluid
								/>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			</MDBContainer>


		<Footer></Footer>
		</>
	)
}
export default Admin