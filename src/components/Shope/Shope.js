import React, { useEffect, useState } from 'react';
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
                <h1>product items {products.length}</h1>
            </div>
            <div className="item-summary">
                <h1>summary</h1>
            </div>
        </div>
    );
};

export default Shope;