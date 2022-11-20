import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { VscHome } from 'react-icons/vsc'
import { BsPersonCircle } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiOutlineMail } from 'react-icons/hi'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="dd">
        <GiHamburgerMenu fontSize={45} id="nav" />
        <ul>
          <Link to="/">
            <li id='lli'><VscHome id='icon' /><span id='tut'>Home</span></li>
          </Link>
          <Link to="/about">
            <li id='lli'><BsPersonCircle id='icon' /><span id='tut'>About</span></li>
          </Link>
          <button><span id='mails'>Contact Me</span> <HiOutlineMail id='mail' /></button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
