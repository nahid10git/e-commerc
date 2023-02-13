import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemove}) => {
    const {id, img, name,price,shipping,quantity}=product;
    return (
        <div className='reviewItem-product'>

            
            <div className='review-img'>

                <img src={img} alt='' ></img>
            </div>
            <div className='reviewItem-details'>
                <div>
                    <p>Name:{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <div>

                    </div>
                    <div>
                    <button onClick={()=>handleRemove(id)} className='delete-btn'>Delete</button>
                </div>

                </div>

            </div>
        </div>
    );
};

export default ReviewItem;