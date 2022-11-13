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
  import { useNavigate } from "react-router-dom";
const AddProduct = () =>{
    const [name ,setName] =React.useState('');
    const [description ,setDescription] =React.useState('');
    const [image ,setImage] =React.useState('');
    const [category ,setCategory] =React.useState('');
    const [size ,setSize] =React.useState('');
    const [color ,setColor] =React.useState('');
    const [price ,setPrice] =React.useState('');
    const addProduct = async() => {
        console.warn(name,description,image,category,price,size,color,price)
        let result = await fetch("http://localhost:8000/api/products/product", {
            method: 'post',
            body: JSON.stringify({ name, description, price, size, color, image,category}),
            headers: {
              'Content-Type': 'application/json',
    
            }
          })
          result= await result.json()
          console.warn("hemm",result)
          if(result){
            alert("product added")
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
                    Add Product
                  </p>
  
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Nom du produit"
                      id="form1"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-100"
                    />
                  </div>
  
  
  
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Description"
                      id="form2"
                      type="text"
                      name="email"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
  
                    />
                  </div>
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Image url"
                      id="form3"
                      type="text"
                      name="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
  
                    />
                  </div>
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Category"
                      id="form3"
                      type="text"
                      name="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
  
                    />
                  </div>
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Dimensions"
                      id="form3"
                      type="text"
                      name="text"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
  
                    />
                  </div>
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Color"
                      id="form3"
                      type="text"
                      name="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
  
                    />
                  </div>
  
  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Prix"
                      id="form3"
                      type="number"
                      name="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
  
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
  
                  <MDBBtn className="mb-4" size="lg" type="submit" onClick={addProduct}>
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
    )
}
export default AddProduct;
