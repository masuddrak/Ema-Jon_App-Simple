import React from 'react';
import './Card.css'

const Card = ({card}) => {
    let price=0;
    let sipping=0;
    for(const product of card){
        price=price+product.price;
        sipping=sipping+product.shipping
    }
    const tex=(price*0.1).toFixed(2);
    const grandTotal=price+sipping+parseFloat(tex);
    return (
        <div className='card'>
            <h1>Product summary Lists</h1>
                <h3>Selected Items :{card.length}</h3>
                <p>Total Price:${price}</p>
                <p>Total Shipping Charge:${sipping}</p>
                <p>Tex:${tex}</p>
                <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Card;