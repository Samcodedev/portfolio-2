import React from 'react'
import { Link } from 'react-router-dom'
import { TbMicrophone2 } from 'react-icons/tb'
import './Card.css'
import img from '../../../img/Screenshot_20230307-143022_Instagram.jpg'
import img1 from '../../../img/IMG_8340.jpg'
import img2 from '../../../img/IMG_9168.jpg'
import img3 from '../../../img/IMG_9717.jpg'
import img4 from '../../../img/IMG_9623.jpg'

const Card4 = () => {

    const data = [
        {
            title: "International Event Compere",
            content: "Gloria has hosted Conference, Work shops, Weddings, Seminars, Summits, Book launches at several parts of the country and even outside of Nigeria.",
            content2: "For any event hosting, Gloria exudes only excellence. You can trust your event to be perfect, beyond your imagination.",
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
        <TbMicrophone2 fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card4
