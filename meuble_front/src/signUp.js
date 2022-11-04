import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CheckBox from "./checkBox";

function SignUp() {
	return (
		<>
			<Navbar />
			<Form>
				<Form.Group className="mb-3" controlId="formBasicFirstName">
					<Form.Control type="FirstName" placeholder="First name" />
					<Form.Text className="text-muted"></Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicSurName">
					<Form.Control type="SurName" placeholder="Surname" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicemail">
					<Form.Control type="Email" placeholder="Email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicBirthDate">
					<Form.Control type="BirthDate" placeholder="Birth date" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control type="Password" placeholder="Password" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
					<Form.Control
						type="Confirm Password"
						placeholder="Confirm Password"
					/>
				</Form.Group>

				<Form.Text>Choose your type</Form.Text>

				<CheckBox />

				<Button variant="primary" type="submit">
					Push to complete
				</Button>
			</Form>
			<Footer />
		</>
	);
}

export default SignUp;
