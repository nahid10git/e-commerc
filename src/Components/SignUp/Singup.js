import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const [error, setError]= useState(null)

    const handleSubmitBtn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value; 
        const confirm= form.confirm.value; 
        console.log(email, password, confirm)


        if(password.length<6){
            setError("Password should be 6 or more character")
            return;
        }
        
        if(password!==confirm){
            setError("Your password did not match")
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error=>console.error(error))

        
    }
    


    return (
        <div className='form-container' >
            <div>
                <h2 className='form-title' >Register</h2>
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
                <div className='form-control'>
                    <label htmlFor='confirm'>Confirm-Password:</label>
                    <input type='password' name='confirm'  required></input>
                </div>
                <input className='btn-submit' type='submit' value="Register"></input>


               
            </form>
            <p>Already Have An Account?<Link to ='/signin'>SignIn</Link></p>
            <p className='error'>{error}</p>
       
        </div>
    );
};

export default SignUp;