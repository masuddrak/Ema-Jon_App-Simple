import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const addToCard=(product)=>{
      console.log(product)
    }
    return (
        <div className='shope'>
            <div className="item">
                {
                    products.map(product=><Product
                         key={product.id}
                          product={product}
                          addToCard={addToCard}
                          ></Product>)
                }
            </div>
            <div className="item-summary">
                <h1>Product summary List</h1>
            </div>
        </div>
    );
};

export default Shope;