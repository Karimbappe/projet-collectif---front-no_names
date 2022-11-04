import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SignIn() {
	return (
		<>
			<Navbar />
			<div className="signInContent">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">
							We will sell your credentials and earn money without your concent!
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me to stay log" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
			<Footer />
		</>
	);
}

export default SignIn;
