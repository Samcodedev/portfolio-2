import React from 'react'
import './Footer.css'
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sub-footer">
        <div className="copy">
          <small>Copyright 2022 samcode. All rights reserved</small>
        </div>
        <div className="icon">
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer
