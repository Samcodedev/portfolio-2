import React from 'react'
import { TbSpeakerphone } from 'react-icons/tb'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import './Skills.css'
import SkillsCard from '../../Comp/SkillsCard'
import Achieves from '../../Comp/Achieves'

const Skills = () => {

    const data = [
        {
            icons: <TbSpeakerphone className='icons' />,
            title: "Public Speaker",
            text: "Am a speacker i speak in more that 100 places yearly."
        },
        {
            icons: <FaChalkboardTeacher className='icons' />,
            title: "Media Personality",
            text: "I coach people on how to become an expert affiliate marketer."
        },
        {
            icons: <MdOutlineBusinessCenter className='icons' />,
            title: "Event Host",
            text: "I serve as a business consultant to alot of businesses out their."
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
