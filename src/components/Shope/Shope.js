import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shope'>
            <div className="item">
                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className="item-summary">
                <h1>summary</h1>
            </div>
        </div>
    );
};

export default Shope;