import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";

const initFormData = Object.freeze({
	//declaration de l'objet initiale pour recevoir les credentials
	username: "",
	password: "",
});

const SignInForm = () => {
	//cette fonction englobe toute les function pour afficher et recuperer les credentials mais ne return que de l'html
	const [formData, updateFormData] = useState(initFormData); //[formDat = etat actuel de la valeur, UpdateFormData = redirige vers une fonction pour update l'etat de la valeur] useState(qui prend l'object initFormData),

	const handleChange = (elem) => {
		//cette fonction sert a map les credentials vers l'objet initFormData
		// elem = formData
		updateFormData({
			...formData, // ... = spread operator pour combiner 2 objects entre eux ici initFormData et le formulaire remplis par l'utilisateur
			[elem.target.name]: elem.target.value.trim(), //trim les espaces (ca n'a pas l'aire de fonctionner !!!)
		});
	};

	const handleSubmit = (elem) => {
		//elem = formDat
		elem.preventDefault(); //methode servant a gerer les erreurs

		console.log(formData); //submit formData to api @Karim
	};

	return (
		<>
			<Navbar />
			<div className="signInContent">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="username"
							onChange={handleChange} //
						/>
						<Form.Text className="text-muted">
							We will sell your credentials and earn money without your concent!
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Password"
							name="password"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						{/* relier la checkBox pour que user reste connecte apres s'etre identifier? No idea how to do this !*/}
						<Form.Check type="checkbox" label="Check me to stay log" />
					</Form.Group>
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						Submit
					</Button>
				</Form>
			</div>
			<Footer />
		</>
	);
};

export default SignInForm;
