import React from 'react'
import './SkillCard.css'

const SkillsCard = (props) => {
  return (
    <div className='skillscard'>
        {props.icon}
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        {/* <span className='change'>KNOW MORE{props.more}</span> */}
    </div>
  )
}

export default SkillsCard
