import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Profile = () => {


  const [userData, setUserData] = useState({
    name: 'Anshu',
    image: assets.girl,
    email: 'anshu@gmail.com',
    phone: '00000000',
    address:{
      line1: 'abc 123 us',
      line2: 'uygfhv gfdsfs fbhsudf'
    },
    gender: 'female',
    dob: '2006-01-10'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
     <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit
        ?<input className='bg-gray-50 text-3xl font-medium max-w-60' value={userData.name} type='text' onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        :<p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
      }

      <hr className='bg-[#adadad] h-[1px] border-none' />
      <div className='grid grid-col-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
        <p className='text-gray-600 underline mt-3'>CONTACT INFORMATION</p>
     
      <div className='grid grid-col-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
      <p className='font-medium'>Email id:</p>
      <p className='text-blue-500'>{userData.email}</p>
      <p className=' font-medium'>Phone:</p>

      {
        isEdit
        ?<input className='bg-gray-100 max-w-52' value={userData.phone} type='text' onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
        :<p className='text-blue-400'>{userData.phone}</p>
      }
      
      <p className='font-medium' >Address</p>
      {
        isEdit
        ?<p>
         <input className='bg-gray-50' value={userData.address.line1} type="text" onChange={()=> setIsEdit(prev =>({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
         <br />
         <input className='bg-gray-50' value={userData.address.line2} type="text" onChange={()=> setIsEdit(prev =>({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
        </p>
        : <p className='text-gray-500'>
          {userData.address.line1} 
          <br />
          {userData.address.line2}
        </p>
      }
      </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className=' font-medium'>Gender :</p>
          {
            isEdit
            ?<select className='max-w-20 bg-gray-100' value={userData.gender} onChange={e => setUserData(prev => ({...prev, gender:e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userData.gender}</p>
          }
           

          <p className='font-medium'>Birthday :</p>
          {
            isEdit
            ?<input className='max-w-28 bg-gray-100' type="date" onChange={e => setUserData(prev => ({...prev, dob:e.target.value}))} />
            :<p className='text-gray-400'> {userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit
          ?<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(false)}>Save Information</button>
          :<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=> setIsEdit(true)}>Edit</button>
        }
      </div>

    </div>
  )
}

export default Profile
