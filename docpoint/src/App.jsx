import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='mx-4 sm:mx-10'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/myAppointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
