import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const LamPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='flex justify-center items-center' style={{ minHeight: 'calc(100vh - 68px)' }}>
      <div className='
        w-full 
        mx-4
        sm:w-80 sm:h-auto 
        md:w-96 md:h-auto 
        lg:w-140 lg:h-auto
        bg-gray-200 
        font-semibold 
        text-gray-700 
        rounded-lg 
        shadow-xl
      '>
        <h1 className='
          text-center 
          mt-3 
          mb-2
          sm:text-lg 
          md:text-xl 
          lg:text-2xl 
          font-bold 
          text-gray-800
        '>
          Contact Form
        </h1>
        
        <form onSubmit={handleSubmit} className='p-4 sm:p-3 md:p-4 lg:p-6'>
          {/* Full Name */}
          <div className='mb-3'>
            <label className='block text-sm sm:text-xs md:text-sm font-medium text-gray-700 mb-1'>
              Full Name
            </label>
            <input 
              className='
                w-full 
                border border-gray-300 
                rounded-md 
                h-10 sm:h-9 md:h-10 lg:h-11 
                px-3 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent
                transition-all
                text-sm
              ' 
              type="text" 
              name="fullName"
              placeholder='Enter your name'
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
          </div>

          {/* Email Address */}
          <div className='mb-3'>
            <label className='block text-sm sm:text-xs md:text-sm font-medium text-gray-700 mb-1'>
              Email Address
            </label>
            <input 
              className='
                w-full 
                border border-gray-300 
                rounded-md 
                h-10 sm:h-9 md:h-10 lg:h-11 
                px-3 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent
                transition-all
                text-sm
              ' 
              type="email" 
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          {/* Your Message */}
          <div className='mb-4'>
            <label className='block text-sm sm:text-xs md:text-sm font-medium text-gray-700 mb-1'>
              Your Message
            </label>
            <textarea 
              className='
                w-full 
                border border-gray-300 
                rounded-md 
                p-3 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent
                resize-y
                text-sm
                min-h-[80px]
                sm:min-h-[70px]
                md:min-h-[100px]
                lg:min-h-[120px]
              ' 
              name="message"
              placeholder='Enter your message'
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button 
              type="submit"
              className='
                w-full 
                bg-blue-600 
                text-white 
                font-semibold 
                py-2.5 
                px-4 
                rounded-md 
                hover:bg-blue-700 
                hover:ring-2 
                hover:ring-amber-400 
                focus:ring-2 
                focus:ring-green-500
                transition-all
                duration-300
                text-sm
                sm:text-xs
                md:text-sm
                lg:text-base
              '
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LamPage