import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1 className='text-3xl mt-20 font-black'>Welcome to About page</h1>
      <div className='flex justify-center mt-10 gap-x-5'>
        <button className='border rounded p-2 font-bold cursor-pointer'><Link to={'/About/Skill'}>Skills</Link></button>
        <button className='border rounded p-2 font-bold cursor-pointer'><Link to={'/About/project'}>Project</Link></button>
        <button className='border rounded p-2 font-bold cursor-pointer'><Link to={'/About/Rating'}>Rating👌</Link></button>
      </div>
    </>
  )
}

export default About