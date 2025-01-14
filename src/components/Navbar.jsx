import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'




const Navbar = () => {

const Navigate = useNavigate();

const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 md-5 border-b border-b-[#ADADAD]' >
     
      <img onClick={()=>Navigate('/')} className='w-44 cursor-pointer' src={assets.logo}alt="" />
      <ul className='md:flex items-center gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='../doctors' >
          <li>All Doctors</li>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='../about' >
          <li>About</li>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='../contact' >
          <li>Contact</li>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className=' flex items-center gap-4'>
        {
          token
          ?<div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full ' src={assets.girl} alt="" />
            <img className='w-2.5 'src={assets.arrow} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
              <div className='min w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>Navigate('./profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>Navigate('./appointment')} className='hover:text-black cursor-pointer'>My appointment</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>Navigate('./login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }



        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu} alt="" />
        
        
        {/*------- Mobile Menu -------- */}


        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo}alt="" />
            <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.menu2} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        
        <NavLink to='/' >
          <li onClick={()=> setShowMenu(false)} className='p-2 rounded-sm hover:bg-primary hover:text-white'>Home</li>
        </NavLink>

        <NavLink to='./doctors' >
          <li onClick={()=> setShowMenu(false)} className='p-2 rounded-sm hover:bg-primary hover:text-white' >All Doctors</li>
       </NavLink>

        <NavLink to='./about' >
          <li onClick={()=> setShowMenu(false)} className='p-2 rounded-sm hover:bg-primary hover:text-white' >About</li>
        </NavLink>

        <NavLink to='./contact' >
          <li onClick={()=> setShowMenu(false)} className='p-2 rounded-sm hover:bg-primary hover:text-white' >Contact</li>
        </NavLink>
      </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
