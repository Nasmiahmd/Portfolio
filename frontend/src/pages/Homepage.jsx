import React from 'react'
import Navbar from '../components/Navbar'
import nasmiPic from "../assets/nasmi-pic.jpg";
const Homepage = () => {
  return (
    <>
        <Navbar />
        <div>
            <h1 className='text-center pt-7 text-4xl font-bold italic'>Hey folks, I'm Nasmi</h1>
            <hr className='max-w-3xs mx-auto text-heading-hr border-4 mt-0.5 rounded-2xl '/>
            <img className='mx-auto max-w-xs mt-8 rounded-full border-4 border-gray-600' src={nasmiPic} alt="Nasmi's Picture" />
        </div>
    </>
    
  )
}

export default Homepage