import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react"


//export default BasicExample;


const UsingFetch = () => {
  const [Object, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8000/api/products/product")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div class='cards_container' >
      {Object.length > 0 && (
        <div className='gridable'>
          {Object.map(Object => (
            <div>
            <div className='cards_content'>
                <Card  href="/#/Product">
                <Card.Img className='imgcart' variant="top" src={Object.image} />
                  <Card.Body>
                  <Card.Title>{Object.name}</Card.Title>
                  <Card.Text>
                  {Object.description}
                  </Card.Text>
                  <Card.Text>
                  {Object.price} € 
                  </Card.Text>
                <Button variant="primary">Buy NOW !</Button>
              </Card.Body>
              </Card>
            </div>
            </div>
          )
        )
      }
    </div>
    )
  }
</div>
)
}






export default UsingFetch
