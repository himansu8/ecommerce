import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function PrivateRoutes() {
    const isAuth =  localStorage.getItem("auth")
    //console.log(isAuth)
    const location = useLocation();
  return (
    <>
    {isAuth ? <Outlet/> : <Navigate to="/login" state={{ from: location }}/>}
    </>
  )
}

export default PrivateRoutes