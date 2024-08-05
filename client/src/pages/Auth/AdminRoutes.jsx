import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth';


function AdminRoutes() {
    const [auth] = useAuth();
    //const isAuth = localStorage.getItem("auth")
    //console.log(isAuth)
    const location = useLocation();
    return (
        <>
            {auth?.user?.role === 1 ? <Outlet /> : <Navigate to="/" state={{ from: location }} />}
        </>
    )
}

export default AdminRoutes