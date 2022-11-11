import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
return (
    <div className='carousel_container'>
    <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100 fitHomePage"
            src="img/000c13ca-ae03-4adf-838b-025d0bcac331_deco-cosy.jpeg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Mid-century Modern, Columbus, Indiana</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 fitHomePage"
            src="img/amenager-salon-acceuillant-canape-homesalons.jpeg"
            alt="Second slide"
        />

					<Carousel.Caption>
						<h3>Drawing room at the Harewood House</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 fitHomePage"
						src="img/spacejoy-c0JoR_-2x3E-unsplash.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>California tract home living room</h3>
						<p>with a kitchen behind a permanent space divider, 1960.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default UncontrolledExample;
