import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbar.css'
import EmptyCart from './EmptyCart'

function Navbar() {
  const items=useSelector((state)=>state.cart)  //refer to stor->reducer->cart for cart , useSelector is like subscribing in redux
  let basket=items.length
  // function emptyBasket() {
  //   if ({basket}===0){
  //     return <h2>EMpty</h2>
  //   }
  // }
  return (
    <div className='Navbar' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
         <div className='logo'>REDux store</div>
         <div>
             <Link className='navLink' to='/'>Home</Link>
             <Link className='navLink' to='/cart'>Cart</Link>
         </div>
         <span className='card-count'>
          <AiOutlineShoppingCart/><strong>{basket}</strong></span>
         
     </div>

    
  )
}

export default Navbar




    


    