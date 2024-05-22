import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/">Matthew Morrison</Link>
            </div>
            <div className='navbar-right'>
                <Link to="/">Home</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;