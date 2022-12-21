import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signOut, updateProfile } from 'firebase/auth';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import app from './../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';



export const ProvideContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const ProvideAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);


    const signUpWithEmailAndpass = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const LoginWithEmailAndPass = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUsers = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    const LogOut = () => {
        setLoader(true)
        return signOut(auth)
    }



    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);

        })
        return () => {
            Unsubscribe();
        }
    }, [])







    const authInfo = {
        user,
        signUpWithEmailAndpass,
        LoginWithEmailAndPass,
        GoogleSignIn,
        updateUsers,
        loading,
        LogOut

    }

    return (
        <>
            <ProvideContext.Provider value={authInfo}>
                {children}
            </ProvideContext.Provider>

        </>
    );
};

export default ProvideAuth;