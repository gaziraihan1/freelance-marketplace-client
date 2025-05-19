import React, { createContext } from 'react';



export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const authValue = {

    }

    return <AuthContext value={authValue}>
        {children}
    </AuthContext>
};

export default AuthProvider;