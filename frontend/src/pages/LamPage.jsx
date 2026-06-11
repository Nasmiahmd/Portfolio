import React from 'react'
import Navbar from '../components/Navbar'

const LamPage = () => {
  return (
    <div className='h-full flex justify-center items-center' style={{ minHeight: 'calc(100vh - 68px)' }}>
      <div className='lg:w-140 lg:h-112.5 md:w-120 md:h-90 sm:w-80 sm:h-70 bg-gray-200 font-semibold text-gray-700 rounded-lg shadow-xl'>
        <h1 className='justify-center flex mt-2 lg:text-2xl sm:text-sm md:text-[18px]'>Contact Form</h1>
        <div className='p-2'>
          <label>Full Name</label>
          <input 
            className='w-full mb-2 border-slate-950 border rounded-md sm:h-auto h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="text" 
            placeholder='Enter your name'
            required 
          />
          <label>Email Address</label>
          <input 
            className='w-full border-slate-950 mb-2 border rounded-md sm:h-auto h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="text" 
            placeholder='Enter your email'
            required 
          />
          <label>Your Message</label>
          <textarea 
            className='w-full md:h-16 lg:h-36 border-slate-950 border sm:h-auto rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y' 
            placeholder='Enter your message'
            rows="4"
            required
          />
        </div>
        <div className='flex justify-center'>
          <button className='w-full mx-2 border-0 bg-navbar sm:h-auto text-navbar-text py-2 px-3 rounded-md hover:ring-2 hover:ring-amber-400 focus:ring-2 focus:ring-green-500'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LamPage