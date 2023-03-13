import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase-auth';




export const AuthContext = createContext();

const auth = getAuth(app)







const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Signin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const LogOut= ()=>{
        signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
      })
      
      return () => unSubscribe()
    },[])


   

    const authInfo = {user,createUser,Signin,LogOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;