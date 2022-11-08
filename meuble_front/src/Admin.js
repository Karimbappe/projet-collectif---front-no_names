import React from 'react';
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
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Navbar from './Navbar'
import Footer from './Footer'

function Admin() {
  return (
	<>
	<Navbar />
    <MDBContainer fluid>
	
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Se connecter</p>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Adresse mail' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Mot de passe' id='form3' type='password'/>
              </div>


              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Se souvenir de moi' />
              </div>

              <MDBBtn className='mb-4' size='lg'>Se connecter</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage className='SignInFormaimg' src="https://pixabay.com/get/g2d19650b92013f34b1a91ee29a348e2a4ee360a921983f0e660d4a5aabd95d94d43983d17f25739ad91780a1c29ace7ce2f4fd1e9a5dffa2bfc2e8f558b99b8e72816ceb5572e2f6cb2aeb647b9dcded_1280.png" fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
	<Footer />
	</>
  );
}

export default Admin;
