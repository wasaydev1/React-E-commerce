import React from 'react'
import Routing from './routing/Routing'
import navbar from './routing/navbar'
import { Link, useNavigate } from 'react-router-dom'
const App = () => {
  // navigator use
  let navigate  = useNavigate()

  return (
    <div className='flex flex-col min-h-screen items-center'>
      <div className='flex justify-around bg-gray-200 p-4 w-full h-20 items-center'>
        <h1 className='font-bold' onClick={()=>navigate('/')}>Logo</h1>
        <ul className='flex space-x-4'>
          {navbar.map((item, index) => (
            <li className='font-bold'>
              <Link to={item.path} key={index}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Routing />
    </div>
  )
}

export default App
