import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

function Cart() {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  function CartRemove(productId) {
    dispatch(remove(productId))
  }
  return (
    <div className='cartWrapper'>
      {
        products.map(product=>(
          <div className='cartCard'>
            <img src={product.image}/>
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button onClick={()=>CartRemove(product.id)} className='btn'>Remove</button>
          </div>
        ))
      }

    </div>
  )
}

export default Cart