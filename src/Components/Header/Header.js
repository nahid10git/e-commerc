import React from 'react';
import img from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='Header'>
            
                <img src={img} alt=''/>
            
            <div>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order</a>
                <a href='/inventory'>Inventory</a>
                <a href='/about'>About</a>
                
            </div>
        </nav>
    );
};

export default Header;