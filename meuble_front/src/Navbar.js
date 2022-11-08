import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
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
						style={{maxHeight: "100px"}}
						navbarScroll
					>
						<Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/App">Notre histoire</Nav.Link>
            <NavDropdown title="Produits" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action2">Chaises</NavDropdown.Item>
							<NavDropdown.Item href="#action3">Tables</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lits</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Armoires</NavDropdown.Item>
              </NavDropdown>
						<NavDropdown title="Inscription" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/#/sign-in">Se connecter</NavDropdown.Item>
							<NavDropdown.Item href="/#/sign-Up">Créer votre compte</NavDropdown.Item>
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
						/>
						<Button variant="outline-success">Rechercher</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;
