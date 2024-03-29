import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillMicFill } from 'react-icons/bs'
import './Card.css'
import img from '../../../img/IMG_20221116_121815_546s.jpg'

const Card1 = () => {

    const data = [
        {
            title: "Voice-Over Artist",
            content: "Gloria is an accomplished voice over artist who has worked on adverts for brands such as Cravings, Selar, Terminal Africas.",
            content2: "Her beautiful and dynamic voice is a selling point for Gloria as she has the ability to give life to your ideas through audio and or video format.",
            content3: "For a second time, she worked on an advert for Selar who is Africa's largest Digital platform. That can only mean a thing. Excellence. Gloria has the voice to bring your adverts and ideas to life.",
            img: img,
            gallery1: "https://www.instagram.com/p/CcqdXlDjeS0/?utm_source=ig_web_copy_link",
            gallery2: "https://www.instagram.com/p/Cfo80s1DwDH/?igshid=YmMyMTA2M2Y=",
            gallery3: "https://www.instagram.com/reel/Coh4guUDgEw/?utm_source=ig_web_copy_link"
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
