import React, { useEffect,useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
const ProductList = () =>{
    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        getProducts()
    },[])
const getProducts = async() =>{
    let result = await fetch("http://localhost:8000/api/products/product")
    result = await result.json()
    setProducts(result)
}
const deleteProducts = async (id) =>{
    console.warn(id)
    let result = await fetch(`http://localhost:8000/api/products/${id}`,{
        method: 'DELETE',
        headers:{"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmEzODc4MmVjOWFlY2M0NmZjOTEyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzkwNTY5NH0.eQChc-B3ofKOLdD0FT1YX34Xk5a8uc111N6uGp_xwfg"}

    }
    )
    result = await result.json()
    if(result){
        alert("product deleted")
    }
}

return (
    <>
    <Navbar />
    <div className="product-list">
        <h3>NoName Products</h3>
        <ul>
            <li>Index</li>
            <li>Name</li>
            <li>Category</li>
            <li>Size</li>
            <li>Price</li>
            <li>InStock</li>
            <li>Ratings</li>
            <li>Delete</li>
        </ul>
        {
            products.map((item,index)=>
            <ul key={item}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.category}</li>
            <li>{item.size}</li>
            <li>{item.price}€</li>
            <li>{item.inStock}</li>
            <li>{item.ratings}</li>
            <li><button onClick={()=>deleteProducts(item._id)}>Delete</button></li>
            
        </ul>
            )
        }
    </div>
    <Footer/>
    </>
)
}

export default ProductList