import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import './SignIn.css'

const SignIn = () => {
    const {Signin}= useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmitBtn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(email, password)



        Signin(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            navigate("/")
        })
        .catch(error=>console.error(error))

        
    }

    return (
        <div className='form-container' >
            <div>
                <h2 className='form-title' >Login</h2>
            </div>
            <form onSubmit={handleSubmitBtn}>
                <div className='form-control'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' placeholder='Enter Your email' required></input>

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password'  required></input>
                </div>
                <input className='btn-submit' type='submit' value="Login"></input>


               
            </form>
            <p>Have you any account?<Link to ='/signup'>Create An Account</Link></p>
       
        </div>
    );
};

export default SignIn;