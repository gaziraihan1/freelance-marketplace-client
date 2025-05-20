import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';



export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(false);

    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
      setLoading(true)
        return signOut(auth)
    }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
        console.log(currentUser)
    });

    return () => unsubscribe();
  }, []);

    const authValue = {
        createUser,
        signinUser,
        logOut,
        updateUser,
        resetPassword,
        loading
    }

    return <AuthContext value={authValue}>
        {children}
    </AuthContext>
};

export default AuthProvider;