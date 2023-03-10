import React from 'react'
import { Link } from 'react-router-dom'
import { MdRecordVoiceOver } from 'react-icons/md'
import './Card.css'
import img from '../../../img/profile-2.png'

const Card5 = () => {

    const data = [
        {
            title: "Communication Specialist",
            content: "She has trained businesses and organizations on how to communicate with their clients.",

            img: img,
            gallery1: "https://www.instagram.com/p/CagvaSYjOFO/?utm_source=ig_web_copy_link",
            gallery2: "https://www.instagram.com/p/CY0gT0njOeX/?utm_source=ig_web_copy_link",
            gallery3: "https://www.instagram.com/p/CTmVIMFDBBq/?utm_source=ig_web_copy_link"
        }
    ]

  return (
    <div className='card'>
      <Link to="/test" state={{id: data[0]}}>
        <MdRecordVoiceOver fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card5
