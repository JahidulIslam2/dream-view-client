import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProvideContext } from '../provideAuth/ProvideAuth';


const ProtectedRoute = ({children}) => {
    const {user,loading}=useContext(ProvideContext)
    const location =useLocation();
    if (loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user){
        return children
    }
   
    return <Navigate  to={`/Login`} state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;