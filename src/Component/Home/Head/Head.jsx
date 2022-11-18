import React from 'react'
import './Head.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import Font from 'react-font'
import profile from '../../img/profile-1.png'

const Head = () => {
  return (
    <div className='header'>
        <div className="sub-header">
            <div className="img-div">
                <img src={profile} alt="profile pic" />
            </div>
            <div className="text-div">
                <span>Hello i'm Gloria</span>
                <h1>Public Speaker</h1>
                <p>Hello my name is Joseph Inneh am an Affiliate marketer i can help you turn your MOBILE PHONE into an ATM MACHINE scroll down now.
                i can help you turn your MOBILE PHONE into an ATM MACHINE scroll down now.
                </p>
                <Link to="/about"><button>About Me <FaLongArrowAltRight fontSize="30px" /> </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Head
