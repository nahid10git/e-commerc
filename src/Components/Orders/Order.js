import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart]= useState(previousCart);
    
    const deleteCart =()=>{
        setCart([])
        deleteShoppingCart();
    }


    const handleRemove = (id)=>{
       const remainingProduct = cart.filter(product=>product.id!==id)
        setCart(remainingProduct)
        removeFromDb(id)
    }

    
   


    return (
        <div className='shop-container'>

            <div>

            {
                cart.map(product=><ReviewItem
                key={cart.id}
                product={product}
                handleRemove={handleRemove}
                deleteCart={deleteCart}

                ></ReviewItem>)
            }
            {cart.length===0 && <h3>Plase Buy SomeThing <Link to='/'>Back To Home..</Link></h3>}

            </div>
            <div className='cart-container'>
            <Cart deleteCart={deleteCart} cart={cart}><Link to ='/'>
              <button className='Delete-Cart'>Want to buy more!!!</button>
            </Link></Cart>

            </div>
           
        </div>
    );
};

export default Order;