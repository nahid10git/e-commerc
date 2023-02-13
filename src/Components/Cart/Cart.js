

import './Cart.css'

const Cart = (props) => {
    const {cart, deleteCart,children }= props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        quantity= quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
   const tax = (total * 0.1).toFixed(2);
   const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
             <h3>Order Summary:</h3>
             <p>Order Item: {quantity}</p>
             <p> Price: ${total}</p>
             <p> Shipping: ${shipping}</p>
             <p>Tax: ${tax} </p>
             <p>Grand Total: ${grandTotal} </p>
             <div className='Delete-Cart'>
                <button onClick={deleteCart}>Delete Cart!</button>
       
             {children}
            
               
                
                
             </div>
        </div>
    );
};

export default Cart;
