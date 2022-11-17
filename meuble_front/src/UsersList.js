import React, { useEffect,useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
const UsersList = () =>{
    const [users,setUsers] = useState([])
    
    useEffect(()=>{
        getUsers()
    },[])
    let token = localStorage.getItem("token")
   
    // console.warn("Bearer")
const getUsers = async() =>{
    
    let result = await fetch("http://localhost:8000/api/user",{
        method: 'GET',
        headers:{"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmEzODc4MmVjOWFlY2M0NmZjOTEyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzkwNTY5NH0.eQChc-B3ofKOLdD0FT1YX34Xk5a8uc111N6uGp_xwfg"}
    })
    result = await result.json()
    setUsers(result)
}
const deleteUsers = async (id) =>{
    console.warn(id)
    let result = await fetch(`http://localhost:8000/api/user/find/${id}`,{
        method: 'DELETE',
        headers:{"token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmEzODc4MmVjOWFlY2M0NmZjOTEyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzkwNTY5NH0.eQChc-B3ofKOLdD0FT1YX34Xk5a8uc111N6uGp_xwfg"}

    }
    )
    result = await result.json()
    if(result){
        alert("user deleted")
    }
}

return (
    <>
    <Navbar />
    <div className="product-list">
        <h3>NoName Users</h3>
        <ul>
            <li>Index</li>
            <li>Username</li>
            <li>Email</li>
            <li>Reviews</li>
            <li>Delete</li>
        </ul>
        {
            users.map((item,index)=>
            <ul key={item}>
            <li>{index + 1}</li>
            <li>{item.username}</li>
            <li>{item.email}</li>
            <li>{3}</li>
            <li><button onClick={()=>deleteUsers(item._id)}>Delete</button></li>
            
        </ul>
            )
        }
    </div>
    <Footer/>
    </>
)
}

export default UsersList