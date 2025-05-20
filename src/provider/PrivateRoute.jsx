import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Auth-context/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)
    if(loading) {
        return <Loading />
    }
    if(user && user?.email) {
        return children
    }
    else{
        return <Navigate state={location.pathname} replace  to='/auth/login' />
    }
};

export default PrivateRoute;