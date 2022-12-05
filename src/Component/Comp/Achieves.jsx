import React from 'react'
import './Achieves.css'
import SkillsCard from './SkillsCard'

const Achieves = () => {

    const data = [
        {
            title:"+3500",
            text:"Students"
        },
        {
            title:"+04",
            text:"Awards"
        },
        {
            title:"+700",
            text:"Testimonies"
        },
        {
            title:"+50",
            text:"Speack"
        }
    ]

    const cards = data.map((items) =>{
        return(
            <SkillsCard 
                title={items.title}
                text={items.text}
            />
        )
    })

  return (
    <div className='achieves'>
        <div className="experience">
            <h1>07</h1>
            <p>Years Experience</p>
        </div>
        <div className="cards">
            {cards}
        </div>
    </div>
  )
}

export default Achieves
