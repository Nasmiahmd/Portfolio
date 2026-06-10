import React from 'react'
import Navbar from '../components/Navbar'

const LamPage = () => {
  return (
    <div className='h-full flex justify-center items-center' style={{ minHeight: 'calc(100vh - 68px)' }}>
      <div className='lg:w-140 lg:h-112.5 md:w-120 md:h-90 sm:w-80 sm:h-auto bg-gray-200 font-semibold text-black rounded-lg shadow-xl'>
        <div className='mt-2 p-2'>
          <input 
            className='w-full border-slate-950 border rounded-md h-10 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' 
            type="text" 
            placeholder='Your Mail' 
          />
        </div>
        <div className='p-2'>
          <textarea 
            className='w-full md:h-52 lg:h-72 border-slate-950 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y' 
            placeholder='Your comments'
            rows="4"
          />
        </div>
        <div className='flex justify-end m-3'>
          <button className='border border-0 bg-navbar text-navbar-text py-2 px-3 rounded-md hover:ring-2 hover:ring-amber-400 focus:ring-2 focus:ring-green-500'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default LamPage