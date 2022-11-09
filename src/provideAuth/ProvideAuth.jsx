import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import app from './../firebase/firebase.config';



export const ProvideContext =createContext();
const auth =getAuth(app)

const ProvideAuth = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoader] = useState(true);


    const signUpWithEmailAndpass =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const   LoginWithEmailAndPass = (email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    

    useEffect(()=>{
        const Unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoader(false);

        })
        return () => {
                    Unsubscribe();
                }
    },[])







    const authInfo = {
        user,
        signUpWithEmailAndpass,
        LoginWithEmailAndPass,

    }

    return (
        <>
     <ProvideAuth.Provider value={authInfo}>
        {children}
     </ProvideAuth.Provider>
          
        </>
    );
};

export default ProvideAuth;