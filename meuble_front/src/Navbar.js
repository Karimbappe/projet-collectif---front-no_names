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
						src="/img/Capture d’écran 2022-11-02 à 17.21.17.png"
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
						<Nav.Link href="/#/App">Home</Nav.Link>
            <Nav.Link href="/#/App">About us</Nav.Link>
            <NavDropdown title="Produits" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/#/Category/Chaises">Chaises</NavDropdown.Item>
							<NavDropdown.Item href="/#/Category/Tables">Tables</NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Lits">Lits</NavDropdown.Item>
              <NavDropdown.Item href="/#/Category/Armoires">Armoires</NavDropdown.Item>
              </NavDropdown>
						<NavDropdown title="Inscription" id="navbarScrollingDropdown">
							<NavDropdown.Item href="/#/sign-in">Se connecter</NavDropdown.Item>
							<NavDropdown.Item href="/#/sign-Up">Créer votre compte</NavDropdown.Item>
							<NavDropdown.Item href="/#/Admin">Admin</NavDropdown.Item>
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
