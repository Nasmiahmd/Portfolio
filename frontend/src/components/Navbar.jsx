import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative bg-navbar text-navbar-text p-4 rounded-b-2xl'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between text-xl font-sans'>
            <div className=''>
                <span className='font-extrabold italic'>Nasmi</span>
            </div>
            <div className='flex font-semibold gap-4 '>
                <span>About</span>
                <span>Projects</span>
                <span>Skills</span>
                <span>Leave a message</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar