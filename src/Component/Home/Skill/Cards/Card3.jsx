import React from 'react'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from 'react-icons/fa'
import './Card.css'
import img from '../../../img/IMG_20221116_121821_861s.jpg'

const Card3 = () => {

    const data = [
        {
            title: "Diction-Coach",
            content: "With a graduate degree in English Language, Gloria coaches and teaches diction and communication skills. She has been able to train over 1000 people on effective communication.",
            content2: "She has trained businesses and organizations on how to communicate with their clients.",
            img: img,
            gallery1: "https://www.instagram.com/reel/Cop1EHCDKMg/?utm_source=ig_web_copy_link",
            gallery2: "https://www.instagram.com/reel/CmeY8onjFDb/?utm_source=ig_web_copy_link",
            gallery3: "https://www.instagram.com/reel/CiHgwdsDeJ8/?utm_source=ig_web_copy_link"
        }
    ]

  return (
    <div className='card'>
      <Link to="/test" state={{id: data[0]}}>
        <FaChalkboardTeacher fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card3
