import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    let isLoggedIn = localStorage.getItem("isLogin")
    return (
        <div>
            {
                isLoggedIn ? <Outlet /> : <Navigate to={'/Form'} />
            } 
        </div>
    )
}

export default Private
