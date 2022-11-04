import Form from "react-bootstrap/Form";

function CheckBox() {
	return (
		<Form>
			{["checkbox"].map((type) => (
				<div key={`inline-${type}`} className="mb-3">
					<Form.Check
						inline
						label="Table"
						name="group1"
						type={type}
						id={`inline-${type}-1`}
					/>
					<Form.Check
						inline
						label="Chair"
						name="group1"
						type={type}
						id={`inline-${type}-2`}
					/>
					<Form.Check
						inline
						label="Sofa"
						name="group1"
						type={type}
						id={`inline-${type}-3`}
					/>
					<Form.Check
						inline
						label="Bed"
						name="group1"
						type={type}
						id={`inline-${type}-3`}
					/>
					<Form.Check
						inline
						label="Cupboard"
						name="group1"
						type={type}
						id={`inline-${type}-3`}
					/>
					<Form.Check
						inline
						label="Wardrobe"
						name="group1"
						type={type}
						id={`inline-${type}-3`}
					/>
					<Form.Check
						inline
						label="other"
						name="group1"
						type={type}
						id={`inline-${type}-3`}
					/>
				</div>
			))}
		</Form>
	);
}

export default CheckBox;

{
	/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
	<Form.Check type="checkbox" label="Check me to stay log" />
</Form.Group>; */
}
