import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Logo from "../Header/Logo1.png"


const Header = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className='header'>
            <div className='firstHalf'>
                <div className='logo'>
                    
                <img src={Logo} alt="logo" className="max-w-[18%] pl-3 pt-2" />
                    
                </div>
                <div className='navs'>
                    <Link to="/" className='link hover:text-[#1de990] no-underline'>ABOUT</Link>
                    <Link to="/" className='link hover:text-[#1de990] no-underline'>TEAM</Link>
                    <Link to="/contact" className='link hover:text-[#1de990] no-underline'>CONTACT US</Link>
                    <Link to="/" className='link hover:text-[#1de990] no-underline'>BLOGS</Link>
                </div>
            </div>
            <div className='lastHalf'>
                <Link to="/login" className='link hover:text-[#1de990] no-underline'>SIGN IN</Link>
                <Link to="/register">
                    <button className='signupbtn link'>SIGN UP NOW</button>
                </Link>
            </div>
            <div className='mobileNav'>
                <FaBars className='text-white' onClick={() => setShowNav(!showNav)} />
            </div>


            <div className={`mobileList ${showNav ? "" : "d-none"}`}>
                <Link to="/" className='link hover:text-[#1de990] ' onClick={() => setShowNav(!showNav)}>ABOUT</Link>
                <Link to="/" className='link hover:text-[#1de990] no-underline' onClick={() => setShowNav(!showNav)}>TEAM</Link>
                <Link to="/contact" className='link hover:text-[#1de990] no-underline' onClick={() => setShowNav(!showNav)}>CONTACT US</Link>
                <Link to="/" className='link hover:text-[#1de990] no-underline' onClick={() => setShowNav(!showNav)}>BLOGS</Link>
                <Link to="/login" className='link hover:text-[#1de990] no-underline' onClick={() => setShowNav(!showNav)}>SIGN IN</Link>
                <Link to="/register">
                    <button className='signupbtn link' onClick={() => setShowNav(!showNav)}>SIGN UP NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Header