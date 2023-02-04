import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiCancel} from 'react-icons/gi'
import { useState } from 'react'
import logo from '../img/Gloria-01.png'



const Navbar = () => {

  const [open, openFunc] = useState(false)
  function navbar() {
    openFunc(!open)
  }

  let cancel = document.getElementById("cancel")

  setInterval(() => {
    window.innerWidth >= 970 ? openFunc(true) : console.log("yeeeh")
    window.innerWidth >= 970 ? cancel.style.display="none" : console.log("hohohohho")
  }, 100);

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <GiHamburgerMenu fontSize={35} onClick={navbar} style={{display: open? "none" : "block"}} />
      <GiCancel id='cancel' fontSize={35} onClick={navbar} style={{display: open? "block": "none"}} />
      <div className="dd" style={{display: open ? "flex" : "none"}}>
        <ul>
          <Link to="/" onClick={navbar}><li>Home</li></Link>
          <Link to="/about" onClick={navbar}><li>About</li></Link>
          <Link to="" onClick={navbar}><li>Contact Me</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
