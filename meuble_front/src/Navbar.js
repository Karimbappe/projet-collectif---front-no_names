import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, {useState} from "react";
import {useNavigate } from "react-router-dom";

function NavScrollExample(params) {
	const [message, setMessage] = useState("");

	const handleChange = (event) => {
		setMessage(event.target.value);

		let result = event.target.value;
		console.log(result);
	};
 
    const auth = localStorage.getItem('user')
     
    const navigate =useNavigate()
    const logout = ()=>{
      localStorage.clear(auth)
      navigate('./sign-Up')

    }
let token =localStorage.getItem("token")
let button ;
console.log(token)
    if(token){
      let admin = JSON.parse(auth).isAdmin
    console.log(JSON.parse(auth).isAdmin)
  if (admin){
    button =<NavDropdown.Item href="/#/Admin">Admin</NavDropdown.Item>
  }else{
    button =<NavDropdown.Item >Not Admin</NavDropdown.Item>
  }
    }
    

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            className="logo"
            src="/img/Capture_d_écran_2022-11-02_à_17.21.17-removebg-preview.png"
            alt="First slide"
          />
        </Navbar.Brand>
	
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/AboutUs">Notre histoire</Nav.Link>
            <NavDropdown title="Produits" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/#/Category/Chaise">
                Chaises
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Table">
                Tables
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Lit">Lits</NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Armoire">
                Armoires
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Lampe">
              Lampe
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/AddProduct">
              Add Product
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Inscription" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/#/sign-in">
                Se connecter
              </NavDropdown.Item>
              <NavDropdown.Item href="/#/sign-Up">
                Créer votre compte
              </NavDropdown.Item>
              {button}
              <NavDropdown.Item href="/#/sign-Up" onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Mot de passe oublié
              </NavDropdown.Item>
            </NavDropdown>
            
		
          </Nav>
		
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Je cherche un..."
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={message}
            />

            <Button href={"/#/Result/" + message} variant="outline-success">
              Rechercher
            </Button>
            <div className="dataResult"> </div>
          </Form>
		 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
