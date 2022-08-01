import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

function Products() {
    const [products,setProducts]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchProducts=async()=>{
            const response=await fetch('https://fakestoreapi.com/products')
            const data=await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()

    },[])
    function CartAdd(product) {
        dispatch(add(product))
        
    }
  return (
    <div className='productsWrapper'>
        {
            products.map(product=>(
                <div className='card' key={product.id}>
                    <img className='img' style={{height:'100px'}} src={product.image} alt='preview not available'/>
                    <h3>{product.category}</h3>
                    <h4>{product.title}</h4>
                    <h4>{product.rating.rate}</h4>
                    <h5>{product.description}</h5>
                    <h5>{product.price}</h5>
                    <button onClick={()=>CartAdd(product)} className='btn'>Add To Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products