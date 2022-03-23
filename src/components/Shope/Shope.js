import React, { useEffect, useState } from 'react';
import { addToDb, getStorageCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shope.css'
const Shope = () => {
    const [card,setCard]=useState([])
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
// load data localstorage 
    useEffect(()=>{
        const storageCard=getStorageCard();
        for(const id in storageCard){
            const addedProducts=products.find(product=>product.id===id);
            console.log(addedProducts)
        }
        
    },[])

    const addToCard=(product)=>{
    //   console.log(product)
      const newCard=[...card,product];
      setCard(newCard)
      addToDb(product.id)
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
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shope;