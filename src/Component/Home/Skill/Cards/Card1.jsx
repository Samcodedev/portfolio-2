import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMicFill } from 'react-icons/bs'
import './Card.css'
import img from '../../../img/IMG_20221116_121815_546s.jpg'

const Card1 = () => {

    const data = [
        {
            title: "Voice-Over Artist",
            content: "Her beautiful and dynamic voice is a selling point for Gloria as she has the ability to give life to your ideas both in video and audio format.",
            img: img,
            gallery1: img,
            gallery2: img,
            gallery3: img,
            gallery4: img
        }
    ]

  return (
    <div className='card'>
      <Link to="/test" state={{id: data[0]}}>
        <BsFillMicFill fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card1
