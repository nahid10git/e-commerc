
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../contexts/UserContext';
import img from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user,LogOut}=useContext(AuthContext);
    


    return (
        <nav className='Header'>
            
             <Link to='/'><img src={img} alt=''/></Link>
            
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/order'>Order</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to ='/about'>About</Link>
               { 
                user?. uid ?
                <button className='logout-btn' onClick={LogOut}>LogOut</button>
                :
                <>
                <Link to ='/signin'>SignIn</Link>
                <Link to ='/signup'>SignUp</Link>
              
              </>
                }
                
                
            </div>
        </nav>
    );
};

export default Header;