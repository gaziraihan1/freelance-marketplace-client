import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { auth } from '../firebase/firebase.init';



export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

    const logOut = () => {
        return signOut(auth)
    }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
    });

    return () => unsubscribe();
  }, []);

    const authValue = {
        createUser,
        signinUser,
        logOut,
        updateUser,
        resetPassword
    }

    return <AuthContext value={authValue}>
        {children}
    </AuthContext>
};

export default AuthProvider;