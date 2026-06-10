import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const ProjectsPage = () => {
  return (
    <>
    <div className='overflow-x-hidden min-h-screen'>
      <div className='mt-7 mb-5 flex justify-center items-center'>
        <h1 className='w-3/4 text-shadow-lg font-semibold font-mono sm:text-[18px] text-xl lg:text-2xl'>As a software engineer, I have developed and contributed to several practical projects focused on solving real-world problems and improving user experience.</h1>
      </div>
      <div className='m-4 flex items-center justify-center flex-wrap gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
      
    </>
  )
}

export default ProjectsPage