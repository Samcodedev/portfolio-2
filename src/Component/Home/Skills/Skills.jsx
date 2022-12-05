import React from 'react'
import { BsBroadcast } from 'react-icons/bs'
import { BiUserVoice } from 'react-icons/bi'
import { GiTeacher } from 'react-icons/gi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import './Skills.css'
import SkillsCard from '../../Comp/SkillsCard'
import Achieves from '../../Comp/Achieves'

const Skills = () => {

    const data = [
        {
            icons: <BsBroadcast className='icons' />,
            title: "Award-Winning Broadcaster",
            text: "Gloria is an award-winning broadcaster with special love for the radio."
        },
        {
            icons: <BiUserVoice className='icons' />,
            title: " Voice-Over Artist",
            text: "Her beautiful and dynamic voice is a selling point for Gloria as she has the ability to give life to your ideas both in video and audio format."
        },
        {
            icons: <GiTeacher className='icons' />,
            title: "Diction-Coach",
            text: "With a graduate degree in English Language, Gloria coaches and teaches diction and communication skills. She has been able to train over 1000 students online and offline. "
        }
    ]

    const cards = data.map((items) =>{
        return(
            <SkillsCard 
                icon={items.icons}
                title={items.title}
                text={items.text}
                more={<FaLongArrowAltRight fontSize="20px" /> }
            />
        )
    })

  return (
    <div className='skills'>
        <div className="sub-skills">
            {cards}
        </div>
        <div className="achie">
            <Achieves />
        </div>
    </div>
  )
}

export default Skills
