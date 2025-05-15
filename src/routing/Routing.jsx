import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import Services from '../Services'
import Blog from '../Blog'
import navItem from './navbar.js'
import Description from '../Description.jsx'
import Formmid from '../Formmid.jsx'
import Private from '../Private.jsx'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/Form' element={<Formmid />} />
                <Route element={<Private />}>
                    <Route path='/' element={<Home />} />
                    <Route path={navItem[1].path} element={<About />} />
                    <Route path={navItem[2].path} element={<Contact />} />
                    <Route path={navItem[3].path} element={<Services />} />
                    <Route path={navItem[4].path} element={<Blog />} />
                    <Route path='/Description/:id' element={<Description />} />
                </Route>
                <Route path='/About'>
                    <Route path='Skill' element={<h1 className='text-3xl mt-20 font-black'>Welcome to Skill page</h1>} />
                    <Route path='project' element={<h1 className='text-3xl mt-20 font-black'>Welcome to Project page</h1>} />
                    <Route path='Rating' element={<h1 className='text-3xl mt-20 font-black'>Welcome to Rating👌 page</h1>} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routing
