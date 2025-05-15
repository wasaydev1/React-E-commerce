
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Formmid = () => {
    let navigate = useNavigate()
    let [isLogin, setLogin] = useState(true)

    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
    })
    function submitHandler(e) {
        e.preventDefault()
        console.log(user);

        if (!user.name || !user.email || !user.password || !user.age) {
            alert("Please All Required Field")
        } else {
            localStorage.setItem("isLogin", true)
            setUser({
                name: "",
                email: "",
                password: "",
                age: ""
            })
        }
        isLogin ? navigate('/') || toast.success(`${user.name} Welcome To Store`) : <Formmid />

    }

    return (
        <div className='flex items-center justify-center h-[80vh]'>
            <form onSubmit={submitHandler} className='border-gray-400 border rounded-lg flex flex-col p-5 gap-4'>
                <h1 className='text-3xl font-bold text-center'>Register</h1>
                <input type="text" required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder='name' className='border border-gray-300 outline-none px-2 py-1 rounded-md' />
                <input type="email" required value={user.email} placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} className='border border-gray-300 outline-none px-2 py-1 rounded-md' />
                <input type="password" required value={user.password} placeholder='xxxxxxx' onChange={(e) => setUser({ ...user, password: e.target.value })} className='border border-gray-300 outline-none px-2 py-1 rounded-md' />
                <input type="number" required value={user.age} placeholder='xxxxxxx' onChange={(e) => setUser({ ...user, age: e.target.value })} className='border border-gray-300 outline-none px-2 py-1 rounded-md' />
                <button type='submit' className='bg-black text-white rounded-md py-1.5'>Submit</button>
            </form>
        </div>
    )
}

export default Formmid