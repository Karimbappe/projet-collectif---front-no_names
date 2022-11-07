import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const initFormData = Object.freeze({
	firstname: "",
	surname: "",
	email: "",
	birthDate: "",
	password: "",
	interest: [],
});

function SignUp() {
	// le procede est ici le meme a suivre que dans dans signIn pour recuperer les donne formulaire, attention a comment gerer les donnees checkbox, ici un tableau a vous de tester, faut-il hash le password en front ou en back?

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

				<Form.Check inline label="Table" name="group1" />
				<Form.Check inline label="Chair" name="group1" />
				<Form.Check inline label="Sofa" name="group1" />
				<Form.Check inline label="Bed" name="group1" />
				<Form.Check inline label="Cupboard" name="group1" />
				<Form.Check inline label="Wardrobe" name="group1" />
				<Form.Check inline label="Other" name="group1" />

				<Button variant="primary" type="submit">
					Push to complete
				</Button>
			</Form>
			<Footer />
		</>
	);
}

export default SignUp;
