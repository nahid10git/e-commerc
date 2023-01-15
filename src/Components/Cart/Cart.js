import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const {cart}= props;
    let total = 0;
    let shipping = 0;
    
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
   const tax = total * 0.1;
   const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
             <h3>Order Summary:</h3>
             <p>Order Item: {cart.length}</p>
             <p> Price: ${total}</p>
             <p> Shipping: ${shipping}</p>
             <p>Tax: ${tax} </p>
             <p>Grand Total: ${grandTotal} </p>
        </div>
    );
};

export default Cart;
