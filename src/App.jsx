import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css';
// Importing pages/components
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Doctors from './pages/Doctors' 
import Login from './pages/Login' 
import About from './pages/About' 
import Contact from './pages/Contact' 
import MyProfile from './pages/MyProfile' 
import MyAppointments from './pages/MyAppointment' 
import Appointment from './pages/Appointment' 

const App = () => {
  return (
    <div className='mx-4 sm:mx-10'>
      {/* Navigation Bar */}
      <NavBar />
      {/* Routing System */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myAppointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
