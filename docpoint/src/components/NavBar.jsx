import React from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <div>
            <img src={logo} alt="Docpoint" style={{ width: '100px', height: 'auto' }} />
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
