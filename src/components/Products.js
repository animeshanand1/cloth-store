import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts, STATUSES } from '../store/productSlice'


function Products() {
    // const [products,setProducts]=useState([])
    const dispatch=useDispatch()
    const {data:products,status}=useSelector((state)=>state.product)
    useEffect(()=>{

        dispatch(fetchProducts())
        // const fetchProducts=async()=>{

           
        //     // console.log(data)
        //     // setProducts(data)
        // }
        fetchProducts()

    },[])
    function CartAdd(product) {
        dispatch(add(product))
        
    }
    if(status===STATUSES.LOADING){
        return <h2>Loading...</h2>

    }
    if(status===STATUSES.ERROR){
        return <h2>OOPS Grab a Tea ,Meanwhile the issues is being resolved</h2>

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