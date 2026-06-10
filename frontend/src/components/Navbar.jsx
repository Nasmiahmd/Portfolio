import React, { useEffect, useState, useRef } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { GiHumanTarget } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { BiHappyHeartEyes } from "react-icons/bi";
import { Link, useLocation } from 'react-router';
import { GoArrowLeft } from "react-icons/go";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    const location = useLocation();

    // Define your route-to-name mapping
    const pageNames = {
        "/": "Home",
        "/projects": "Projects",
        "/skills": "Skills",
        "/about": "About",
        "/lam": "Leave a message"
    }

    // Get the name for the current path, default to "Home"
    const currentPageName = pageNames[location.pathname] || "Home";

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
    <nav className='relative w-full shadow-md bg-navbar text-navbar-text py-3 px-4 sm:px-6 rounded-b-2xl'>
        <div className='flex items-center justify-between'>
            <h1 className='flex text-lg sm:text-xl items-center font-bold truncate'>{currentPageName != "Home" ? (<Link to={"/"} className="hover:text-amber-500 transition-colors"><GoArrowLeft className='me-2'/></Link>) : <></>} {currentPageName}</h1>
            <div className='md:flex gap-4 hidden text-lg font-semibold'>
                <Link to={"/projects"}><h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><GoProjectSymlink />Projects</h1></Link>
                <Link to={"/skills"}><h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><GiHumanTarget />Skills</h1></Link>
                <Link to={"/about"}><h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><MdOutlineSelfImprovement />About</h1></Link>
                <Link to={"/lam"}><h1 className='flex items-center gap-1 hover:border-0 ring-1 hover:ring-3 ring-amber-100 hover:shadow-amber-100 hover:shadow-md hover:bg-white hover:text-slate-900 rounded-lg cursor-pointer py-2 px-2 transition-all duration-75'><FaRegMessage />Leave a message</h1></Link>
            </div>
            <button className='md:hidden font-bold text-xl' onClick={()=>setOpen(!open)}><BiDotsVerticalRounded className='text-xl sm:text-2xl'/></button>
        </div>
        <div ref={menuRef}>
            {open && (
                <ul className='md:hidden text-base sm:text-lg flex flex-col  gap-4 absolute z-1 top-14 right-2 max-w-[90vw] min-w-56 bg-white shadow-lg rounded-lg p-4 text-navbar transition-all duration-75'>
                    <Link to={"/projects"}><li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><GoProjectSymlink /> Project</li></Link> 
                    <Link to={"/skills"}><li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><GiHumanTarget />Skills</li></Link>
                    <Link to={"/about"}><li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><MdOutlineSelfImprovement />About</li></Link>
                    <Link to={"/lam"}><li className='flex items-center gap-2 ring-1 hover:ring-2 hover:border-0 hover:border-navbar hover:shadow-slate-600 hover:shadow-md hover:bg-navbar hover:text-white rounded-lg cursor-pointer py-1 px-2 transition-all duration-75'><FaRegMessage />Leave a message</li></Link>
                </ul>
            )}
        </div>
    </nav>
  )
}

export default Navbar