import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality, docId}) => {

    const {doctors }= useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(()=>{
        if(doctors.lenght > 0 && speciality){
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id != docId )
            setRelDoc(doctorsData)
            console.log(doctorsData)
        }
    },[doctors,speciality,docId])

  return (
    <div>
      <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'> Simply browse thrugh our extensive list of trusted doctors.</p>
        <div className=' w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {relDoc.slice (0, 5).map((item,index)=>(
            <div key={index} onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-[#c9d8ff] overflow-hidden rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
            <img className='bg-blue-50' src={item.image}alt="" />
            <div className='p-4'>
             <div className='flex items-center gap-2 text-sm text-center text-green-500'>
               <p className='w-2 h-2 rounded-full bg-green-500'></p>
               <p>Available</p>
             </div>
             <p className='text-[#5c5c5c] text-sm'>{item.name}</p>
             <p className='text-[#5c5c5c] text-sm '>{item.speciality}</p>
            </div>
            </div>
            
          ))}
           
           </div>
           <button onClick={()=>{navigate('/doctors'); scrollTo(0, 0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        
    </div>
    </div>
  )
}

export default RelatedDoctors