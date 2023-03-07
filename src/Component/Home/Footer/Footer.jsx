import React from 'react'
import './Footer.css'
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sub-footer">
        <div className="copy">
          <small>Copyright 2023 samcode. All rights reserved</small>
        </div>
        <div className="icon">
          <a href="https://instagram.com/thegloriaolufeko/"><BsInstagram /></a>
          <a href="https://twitter.com/GOlufeko?t=xi_wb95fZpSAOLTc-_BS_Q&s=09"><BsTwitter /></a>
          <a href="https://www.linkedin.com/in/gloria-olufeko"><BsLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
