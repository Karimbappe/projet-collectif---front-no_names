import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
//export default BasicExample;
const UsingFetch = () => {
	const [Object, setUsers] = useState([]);
	const fetchData = () => {
		fetch("http://localhost:8000/api/product")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			{Object.length > 0 && (
				<div>
					{Object.map((Object) => (
						<div className="cards_container">
							<div className="cards_content">
								<Card style={{width: "18rem"}}>
									<Card.Img variant="top" src={Object.image} />
									<Card.Body>
										<Card.Title>{Object.id}</Card.Title>
										<Card.Text>{Object.name}</Card.Text>
										<Card.Text>{Object.price}</Card.Text>
										<Button variant="primary">Buy NOW !</Button>
									</Card.Body>
								</Card>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
export default UsingFetch;