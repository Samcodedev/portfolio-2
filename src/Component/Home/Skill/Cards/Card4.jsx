import React from 'react'
import { Link } from 'react-router-dom'
import { TbMicrophone2 } from 'react-icons/tb'
import './Card.css'
import img from '../../../img/IMG_20221116_121815_546s.jpg'

const Card4 = () => {

    const data = [
        {
            title: "International Event Compere",
            content: "With a graduate degree in English Language, Gloria coaches and teaches diction and communication skills. She has been able to train over 1000 students online and offline.",
            img: img,
            gallery1: img,
            gallery2: img,
            gallery3: img,
            gallery4: img,
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
