import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css';
import profilePic from '../assets/assets_frontend/profile_pic.png';
import dropDownPic from '../assets/assets_frontend/dropdown_icon.svg';


const NavBar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    return (
        <div className='flex items-center justify-between text-sm py-2 border-b border-b-gray-400 mb-5'>
            <img src={logo} onClick={()=>navigate('/')} alt="Docpoint" className='cursor-pointer h-24 w-auto max-w-[190px]' />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className="py-1">Home</li>
                    <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto' />
                </NavLink>
                <NavLink to="/doctors" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className="py-1">All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto' />
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className="py-1">About</li>
                    <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto' />
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                    <li className="py-1">Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-violet-400 w-3/5 m-auto' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-4'>
                {
                    token ? <div className='flex items-center cursor-pointer gap-2 group relative'>
                        <img src={profilePic} alt="Profile" className="h-10 w-10 rounded-full" />
                        <img src={dropDownPic} alt="Dropdown" className="w-2.5" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=>navigate('myProfile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={()=>navigate('myAppointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div> : <button onClick={() => navigate('/login')} className='bg-violet-400 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>
                        Create Account
                    </button>
                }

            </div>
        </div>
    );
}

export default NavBar;
