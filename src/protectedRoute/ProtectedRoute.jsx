import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import { ProvideContext } from '../provideAuth/ProvideAuth';


const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(ProvideContext)
    const location =useLocation();
    if (loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
   
    return <Navigate  to={`/Login`} state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;