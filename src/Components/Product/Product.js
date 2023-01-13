import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, ratings, price, seller} = props.product;
    const {addToCartHandler} = props;
    
    return (
        <div className='product'>
           <img src={img} alt=''/>
           <div className='product_description'>
            <h5>Product Name: ={name}</h5>
            <h3>Price: = {price}</h3>
            <h3>ratings: = {ratings}</h3>
            <button onClick={()=>props.addToCartHandler(props.product)} className='add-btn'>Add to cart</button>
           </div>
          
        </div>
    );
};

export default Product;