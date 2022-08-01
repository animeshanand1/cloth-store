import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const items=useSelector((state)=>state.cart)  //refer to stor->reducer->cart for cart , useSelector is like subscribing in redux
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span className='logo'>REDux store</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
        </div>
        <span className='card-count'>Cart:{items.length}</span>
    </div>
  )
}

export default Navbar