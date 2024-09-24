import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from './config/redux/cartSlice';


const App = () => {
  const [data ,setdata] = useState(null)
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => setdata(res.products)
)
.catch(err=>console.log(err));


  },[])
  console.log(data);

  const selector = useSelector(state => state.cart.cartItems);
  console.log(selector);
  const dispatch = useDispatch()

  const Addtocart = (item)=>{
   dispatch(addCartItem({
    item
   }))

  }
  
  return (
    <div>
      {/* <Navbar/> */}
      <div className='d-flex justify-content-evenly flex-wrap my-5'>
       {data ?data.map((item)=>{
    return(
      <Card className='my-3' style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.images}/>
      <Card.Body>
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
        $ {item.price}
        </Card.Text>
        <Card.Text>
        Rating: {item.rating}
        </Card.Text>
        <Button variant="primary" onClick={()=>{Addtocart(item)}}>Add to cart</Button>
      </Card.Body>
    </Card>
    )
       }):<h1 className='text-center'>Loading...</h1>}
      </div>
      
    </div>
  )
}

export default App