import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'
const Product = ({product,addToCard}) => {
   
    const {img,name,price,seller,ratings}=product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={()=>addToCard(product)} className='card-btn'>
                <p style={{marginRight:10}}>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;