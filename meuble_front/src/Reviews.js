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
  import { useNavigate ,useParams} from "react-router-dom";
const Review = () =>{
    const [title ,setTitle] =React.useState('');
    const [comment,setComment] =React.useState('');
    const [rating ,setRating] =React.useState('');
    const paramsUrl = useParams();
    console.log(paramsUrl._id);
    const productId = paramsUrl._id
    const addReview = async() => {
      console.warn(title,productId,comment,rating)
        let result = await fetch("http://localhost:8000/api/product/review", {
            method: 'post',
            body: JSON.stringify({title,productId, comment,rating}),
            headers: {
              'Content-Type': 'application/json',
    
            }
          })
          result= await result.json()
          console.warn(result)
          if(result){
            alert("review added")
        }
    }
    return (
        <>
        <Navbar />
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Add Review
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="title"
                      id="form2"
                      type="text"
                      name="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
  
                    />
                  </div>
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Comment"
                      id="form3"
                      type="text"
                      name="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
  
                    />
                  </div>
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="rating"
                      id="form3"
                      type="number"
                      name="text"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
  
                    />
                  </div>
  
  
                 
  
                  <MDBBtn className="mb-4" size="lg" type="submit" onClick={addReview}>
                 Add
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
    )
}
export default Review;
