import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
  
    useEffect(()=>{
      const stroedCart = getStoredCart()
      const savedCart = [];
      for(const id in stroedCart){
        const addedProduct = products.find(product=>product.id===id);
        if(addedProduct){
          const quantity = stroedCart[id];
          addedProduct.quantity=quantity;
          savedCart.push(addedProduct)
        }
      }
      setCart(savedCart);
    },[products])
    const [cart, setCart] = useState([])
    const deleteCart =()=>{
        setCart([])
        deleteShoppingCart();
    }

    const addToCartHandler = (selectedProduct)=>{
      // console.log(selectedProduct)
      let newCart = [];
      const exists = cart.find(product => product.id === selectedProduct.id);
      if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
      }
      else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart= [...rest, exists];
      }
      setCart(newCart);
      addToDb(selectedProduct.id)
    
  }

    return (
        <div className='shop-container'>
          <div className='products-container'>
            {
              products.map(product => <Product
              key={product.id}
              product={product}
              addToCartHandler={addToCartHandler}
              ></Product>)
            }
          </div>
          <div className='cart-container'>
           
           <Cart
           cart={cart}
           deleteCart={deleteCart}>
            <Link to ='/order'>
              <button className='Delete-Cart'>ReviewItem</button>
            </Link>
           </Cart>
          </div>
        </div>
    );
};

export default Shop;