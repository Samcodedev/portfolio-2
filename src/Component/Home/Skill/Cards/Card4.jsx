import React from 'react'
import { Link } from 'react-router-dom'
import { TbMicrophone2 } from 'react-icons/tb'
import './Card.css'
import img from '../../../img/Screenshot_20230307-143022_Instagram.jpg'

const Card4 = () => {

    const data = [
        {
            title: "International Event Compere",
            content: "Gloria has hosted Conference, Work shops, Weddings, Seminars, Summits, Book launches at several parts of the country and even outside of Nigeria.",
            content2: "For any event hosting, Gloria exudes only excellence. You can trust your event to be perfect, beyond your imagination.",
            img: img,
            gallery1: "https://www.instagram.com/reel/Cj_KSxSDleU/?utm_source=ig_web_copy_link",
            gallery2: "https://www.instagram.com/p/CjGbYSFDddY/?utm_source=ig_web_copy_link",
            gallery3: "https://www.instagram.com/reel/CiS0S9EjiD7/?utm_source=ig_web_copy_link"
        }
    ]

  return (
    <div className='card'>
      <Link to="/test" state={{id: data[0]}}>
        <TbMicrophone2 fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card4
