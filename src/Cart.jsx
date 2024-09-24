import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from './config/redux/cartSlice';

const Cart = () => {

    const selector = useSelector(state => state.cart.cartItems);
  console.log(selector);
  const dispatch = useDispatch()

  const delte = (index)=>{
 dispatch(removeCartItem({
    index
 }))

  }

  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
       {selector.length>0 ? selector.map((item,index)=>{
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
              <Button variant="primary" onClick={()=>{delte(index)}}>Delete from cart</Button>
            </Card.Body>
          </Card>
          )
       })
       :<h1 className='text-center'>No Item found </h1>} 

    </div>
  )
}

export default Cart