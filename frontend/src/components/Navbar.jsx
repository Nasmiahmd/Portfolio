import React, { useEffect, useState, useRef } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { GiHumanTarget } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BiHappyHeartEyes } from "react-icons/bi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(()=> {
        const handleOutsideClick = (event) => {
            if(open && menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    },[open])
  return (
    <nav className='relative shadow-md bg-navbar text-navbar-text py-4 px-8 rounded-b-2xl'>
        <div className='flex items-center justify-between p-3'>
            <h1 className='flex gap-1 text-xl font-bold hover:animate-ping transition-all duration-75'>Home</h1>
            <div className='md:flex gap-4 hidden text-lg font-semibold'>
                <h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><GoProjectSymlink />Projects</h1>
                <h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><GiHumanTarget />Skills</h1>
                <h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><IoIosContact />Contact</h1>
                <h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><MdOutlineSelfImprovement />About</h1>
                <h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><FaRegMessage />Leave a message</h1>
            </div>
            <button className='md:hidden font-bold text-xl' onClick={()=>setOpen(!open)}><BiDotsVerticalRounded className='text-2xl'/></button>
        </div>
        <div ref={menuRef}>
            {open && (
                <ul className='md:hidden text-xl flex flex-col items-center gap-4 absolute top-14 right-2 m-w-56 bg-white shadow-lg rounded-lg p-4 text-navbar transition-all duration-75'>
                    <li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><GoProjectSymlink /> Projects</li>
                    <li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><GiHumanTarget />Skills</li>
                    <li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><IoIosContact />Contact</li>
                    <li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><MdOutlineSelfImprovement />About</li>
                    <li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><FaRegMessage />Leave a message</li>
                </ul>
            )}
        </div>
    </nav>
  )
}

export default Navbar