import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/contact'
import Login from './pages/Login'
import Profile from './pages/Profile'
import MyAppointment from './pages/MyAppointment'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
   
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Myappointment' element={<MyAppointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/> 
    </div>
  )
}

export default App
