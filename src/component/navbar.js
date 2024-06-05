import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <NavLink exact to="/">
                    Matthew Morrison
                </NavLink>
            </div>
            <div className='navbar-right'>
                <NavLink exact to="/" className={({ isActive }) => (isActive ? "link-active" : "none")}>About</NavLink>
                <NavLink exact to="/experience" className={({ isActive }) => (isActive ? "link-active" : "none")}>Experience</NavLink>
                <NavLink exact to="/contact" className={({ isActive }) => (isActive ? "link-active" : "none")}>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;