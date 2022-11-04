import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

useEffect(() => {
  // GET request using fetch inside useEffect React hook
  fetch('http://localhost:8000/api/product')
      .then(response => response.json())
      .then(data => setTotalReactPackages(data.total));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

function BasicExample() {
  return (
      function showProducts(data){
  document.querySelector('root').innerHTML=" " 
  var productInfoString = ""
  for(let i=0; i<data.length; i++) {
      let id = data[i].show.id;
      let name = data[i].name;
      let image = data[i].image;
      let category = data[i].category;
      let size = data[i].size;
      let color = data[i].color;
      let price = data[i].price;
      let inStock = data[i].inStock;
      let ratings = data[i].ratings;
      let reviews = data[i].reviews;

      
      let showProductsInfo =`
      <div className='cards_container'>
      <div className='cards_content'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/sidekix-media-0sDzRgrN_pI-unsplash.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  </div>
  </div>`
  }
  document.querySelector('.container').innerHTML += productInfoString
    } 
  );
}

export default BasicExample;