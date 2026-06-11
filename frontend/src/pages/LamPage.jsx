import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import toast from "react-hot-toast"
const LamPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3764efb3-a774-4c0f-80ef-e429f58a4b24");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Successfully Sent!")
    }
  };
  
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
        
        <form onSubmit={onSubmit} className='p-4 sm:p-3 md:p-4 lg:p-6'>
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
              name="name"
              placeholder='Enter your name'
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
                min-h-20
                sm:min-h-17.5
                md:min-h-25
                lg:min-h-30
              ' 
              name="message"
              placeholder='Enter your message'
              rows="4"
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