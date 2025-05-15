import React from 'react'
import navItem from './routing/navbar'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Routing from './routing/Routing'
import Formmid from './Formmid'
import Home from './Home'

const ShowPages = () => {

    let navigate = useNavigate()
    let isLoggedIn = localStorage.getItem("isLogin")

    function handleLogout() {
        localStorage.removeItem("isLogin")
        navigate('/Form')
    }
    return (
        <>
            {isLoggedIn ? <div className='flex flex-col min-h-screen items-center '>
                <div className='flex justify-around bg-gray-200 px-4 w-full h-20 items-center'>
                    <h1 className='font-bold text-3xl' onClick={() => navigate('/')}>Logo</h1>
                    <ul className='navUl flex space-x-4'>
                        {navItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className='li font-bold'>{item.name}</NavLink>
                        ))}
                    </ul>
                    <Link to='/Form'><button className='font-bold bg-black p-2 text-white rounded-md' onClick={handleLogout}>{isLoggedIn ? 'Logout' : 'Login'}</button></Link>
                </div>
                <Routing />
            </div> : <Formmid />}
        </>
    )
}

export default ShowPages
