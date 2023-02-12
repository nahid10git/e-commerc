import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart]= useState(previousCart);
    const handleRemove = (id)=>{
       const remainingProduct = cart.filter(product=>product.id!==id)
        setCart(remainingProduct)
    }

    
   


    return (
        <div className='shop-container'>

            <div>

            {
                cart.map(product=><ReviewItem
                key={cart.id}
                product={product}
                handleRemove={handleRemove}
                ></ReviewItem>)
            }

            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>

            </div>
           
        </div>
    );
};

export default Order;