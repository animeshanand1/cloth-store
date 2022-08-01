import React, { useEffect, useState } from 'react'
import Products from './Products'

function Home() {
    
  return (
    <div>
        <h2 className='heading'>Welcome to the Redux store</h2>
        <section>
            <h5>Products</h5>
            <Products/>
        </section>
    </div>
  )
}

export default Home