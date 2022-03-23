import React from 'react';
import './Card.css'

const Card = ({card}) => {
    console.log(card)
    return (
        <div className='card'>
            <h1>Product summary Lists</h1>
                <h3>Selected Items :{card.length}</h3>
        </div>
    );
};

export default Card;