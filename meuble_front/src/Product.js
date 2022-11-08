import Navbar from './Navbar'
import Footer from './Footer'
import React, { useEffect, useState } from "react"
import { useParams} from 'react-router-dom';

const Product = () => {
    const paramsUrl = useParams();
  console.log(paramsUrl._id);
  const [Product, setProduct] = useState([])

  const fetchData = () => {
    
    fetch("http://localhost:8000/api/products/find/" + paramsUrl._id)
      .then(response => {
        var data = response.json();
        console.log(data)
        return data
      })
      // .then(data => {
      //   setProduct(data)
      // })
     
  }
  useEffect(() => {
    fetchData()
  }, [])
    
  return (
    <div>
        <Navbar />
<div>
  <div>

  </div>
  
</div>

        
        <Footer />  
    </div>
    )
}

export default Product