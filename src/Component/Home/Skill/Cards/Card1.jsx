import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMicFill } from 'react-icons/bs'
import './Card.css'
import img from '../../../img/IMG_20221116_121815_546s.jpg'
import img1 from '../../../img/Screenshot_20230307-142735_Instagram.jpg'
import img2 from '../../../img/Screenshot_20230307-183632_Instagram.jpg'
import img3 from '../../../img/Screenshot_20230307-182435_Instagram.jpg'
import img4 from '../../../img/Screenshot_20230307-144218_Instagram.jpg'

const Card1 = () => {

    const data = [
        {
            title: "Voice-Over Artist",
            content: "She is an accomplished voice over artist who has worked on adverts for brands such as Craving, Selar, terminal Africa.",
            content2: "Her beautiful and dynamic voice is a selling point for Gloria as she has the ability to give life to your ideas through audio and or video format.",
            content3: "For a second time, she worked on an advert for Selar who is Africa's largest Digital platform. That can only mean a thing. Excellence. Gloria has the voice to bring your adverts and ideas to life.",
            img: img,
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4
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
