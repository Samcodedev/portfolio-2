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
                <h1>International Events Compere</h1>
                <p>
                  Hello, I’m Gloria Olufeko you are welcome to my world. 
                  I am so excited to have you here. This is a platform where I can get to connect with my clients, share my values and career growth. 

                  Please feel free to explore and book one or more of my services. 

                </p>
                <Link to="/about"><button>About Me <FaLongArrowAltRight fontSize="30px" /> </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Head
