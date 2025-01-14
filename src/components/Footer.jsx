import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
     <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       {/*-------------  LEFT SECTION --------------- */}
       <div>
        <img className='mb-5 w-40' src={assets.logo} alt="" />
        <p className=' w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut animi accusamus laboriosam inventore laborum officia maiores harum nisi, ea et quo, fugiat quasi accusantium placeat dolore mollitia modi repudiandae temporibus.</p>
       </div>
       {/*-------------  CENTRE SECTION --------------- */}
       <div>
       <p className='text-xl font-medium mb-5'>COMPANY</p>
       <ul className='flex flex-col gap-2 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
       </ul>
       </div>
       {/*-------------  RIGHT SECTION --------------- */}
       <div>
        <p className='text-xl font-medium mb-5'>Get in Touch</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
          <li>+0-000-000-000</li>
          <li>Apanu2007@gmail.com</li>
        </ul>
       </div>
     </div>
    {/*-------------  BOTTOM SECTION --------------- */}
     <div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2024 @Apanu - All Right RESERVED</p>
     </div>
    </div>
  )
}

export default Footer
