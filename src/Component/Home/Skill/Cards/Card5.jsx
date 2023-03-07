import React from 'react'
import { Link } from 'react-router-dom'
import { MdRecordVoiceOver } from 'react-icons/md'
import './Card.css'
import img from '../../../img/profile-2.png'
import img1 from '../../../img/Screenshot_20230307-182714_Instagram.jpg'
import img2 from '../../../img/Screenshot_20230307-142946_Instagram.jpg'
import img3 from '../../../img/Screenshot_20230307-182440_Instagram.jpg'
import img4 from '../../../img/Screenshot_20230307-143010_Instagram.jpg'

const Card5 = () => {

    const data = [
        {
            title: "Communication Specialist",
            content: "She has trained businesses and organizations on how to communicate with their clients.",

            img: img,
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4,
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
