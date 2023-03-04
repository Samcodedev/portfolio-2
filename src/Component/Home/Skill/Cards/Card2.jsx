import React from 'react'
import { Link } from 'react-router-dom'
import { BsBroadcast } from 'react-icons/bs'
import './Card.css'
import img from '../../../img/IMG_20221116_121815_546s.jpg'

const Card2 = () => {

    const data = [
        {
            title: "Award winning broadcast",
            content: "Gloria is an award-winning broadcaster with special love for the radio.",
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
        <BsBroadcast fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card2
