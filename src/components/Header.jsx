import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className=' flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
      <div className='md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg-text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
           Book Appointment
           <br />
           with Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group} alt="" />
            <p>Simply browse through our entensive list of trusted doctors,
                <br />
               schedule your appointment hassle free.
            </p>
        </div>
        <br />
        <a href="#speciality" className=' w-52 flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300  '>
            Book appointment
        </a>
      </div>
      <div className='md:w-1/2 relative'>
      <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.g1} alt="" />
      </div>
    </div>
  )
}

export default Header