import React from 'react'
import { Link } from 'react-router-dom'
import { FaChalkboardTeacher } from 'react-icons/fa'
import './Card.css'
import img from '../../../img/IMG_20221116_121821_861s.jpg'
import img1 from '../../../img/Screenshot_20230307-142915_Instagram.jpg'
import img2 from '../../../img/Screenshot_20230307-182903_Instagram.jpg'
import img3 from '../../../img/Screenshot_20230307-144218_Instagram.jpg'
import img4 from '../../../img/Screenshot_20230307-182731_Instagram.jpg'

const Card3 = () => {

    const data = [
        {
            title: "Diction-Coach",
            content: "With a graduate degree in English Language, Gloria coaches and teaches diction and communication skills. She has been able to train over 1000 people on effective communication.",
            content2: "She has trained businesses and organizations on how to communicate with their clients.",
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
        <FaChalkboardTeacher fontSize={70} />
        <h1>{data[0].title}</h1>
        <p>{data[0].content}</p>
      </Link>
    </div>
  )
}

export default Card3
