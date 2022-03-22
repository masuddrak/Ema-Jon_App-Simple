import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img,name,price,seller,ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button className='card-btn'>Add to Card</button>
        </div>
    );
};

export default Product;