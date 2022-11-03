import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
return (
    <div className='carousel_container'>
    <Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="img/sidekix-media-WgkA3CSFrjc-unsplash.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="img/sidekix-media-0sDzRgrN_pI-unsplash.jpg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="img/spacejoy-c0JoR_-2x3E-unsplash.jpg"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;