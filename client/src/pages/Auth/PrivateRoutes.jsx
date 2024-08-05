import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth';

function PrivateRoutes() {
    const [auth] = useAuth();
    //const isAuth =  localStorage.getItem("auth")
    //console.log(isAuth)
    const location = useLocation();
  return (
    <>
    {auth?.user?.role === 0 ? <Outlet/> : <Navigate to="/login" state={{ from: location }}/>}
    </>
  )
}

export default PrivateRoutes