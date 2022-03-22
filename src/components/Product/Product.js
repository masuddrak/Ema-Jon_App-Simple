import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Product;