import React from 'react'
import Card from '../components/Card'

const ProjectsPage = () => {
  return (
    <div 
      className='min-h-screen py-6 sm:py-8 md:py-10 lg:py-12'
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      {/* Description Section */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
        <div className='flex justify-center items-center'>
          <h1 className='
            w-full 
            sm:w-11/12 
            md:w-3/4 
            lg:w-2/3
            text-center 
            font-semibold 
            font-mono 
            leading-relaxed
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            xl:text-2xl
            text-gray-300
            hover:text-white
            transition-colors
            duration-300
            shadow-lg
            p-4
            sm:p-5
            md:p-6
            rounded-lg
            bg-gray-800/30
            backdrop-blur-sm
          '>
            As a software engineer, I have developed and contributed to 
            several practical projects focused on solving real-world problems 
            and improving user experience.
          </h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className='
        px-3 sm:px-4 md:px-6 lg:px-8
        mx-auto
        max-w-7xl
      '>
        <div className='
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-4
          sm:gap-6
          md:gap-8
          lg:gap-10
          xl:gap-16
          justify-items-center
          items-stretch
        '>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage