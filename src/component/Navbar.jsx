import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const selector = useSelector(state => state.cart.cartItems);
    console.log(selector);
    const navigate = useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"50px",backgroundColor:"black",color:"white"}}>
        <h1 onClick={()=>{navigate("")}}>Ethnic Products</h1>
        {/* <button v ></button> */}
        <Button variant='primary' onClick={()=>{navigate("cart")}} > Cart Items {selector.length}</Button>
    </div>
  )
}

export default Navbar