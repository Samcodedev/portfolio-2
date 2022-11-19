import React from 'react'
import './AboutComp.css'

const AboutComp = (props) => {
  return (
    <div className='about-comp'>
        <div className="img-div">
            <img src={props.img} alt="gloria" />
        </div>
        <div className="text-div">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <img src={props.break} alt="background pic" />
            <p>{props.content2}</p>
            <img src={props.break} alt="background pic" />
            <p>{props.content3}</p>
        </div>
    </div>
  )
}

export default AboutComp
