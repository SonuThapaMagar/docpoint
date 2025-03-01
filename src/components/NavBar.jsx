import React from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom'
import '../index.css';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
            <img src={logo} alt="Docpoint" className='cursor-pointer h-24 w-auto max-w-[190px]' />
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <hr />
                <NavLink to="/doctors">
                    <li>All Doctors</li>
                </NavLink>
                <hr />
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <hr />
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
                <hr />
            </ul>

            <div>
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default NavBar
