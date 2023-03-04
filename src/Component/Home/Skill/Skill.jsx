import React from 'react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import './Skill.css'

const Skill = () => {
  return (
    <div className='skill'>
        <div className="sub-skill">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
        </div>
    </div>
  )
}

export default Skill
