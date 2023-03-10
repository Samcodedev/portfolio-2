import React from 'react'
import { Link } from 'react-router-dom'
import { BsBroadcast } from 'react-icons/bs'
import './Card.css'
import img from '../../../img/IMG_20221116_121837_854s.jpg'
// import img1 from '../../../img/Screenshot_20230211-105229_Instagram.jpg'
// import img2 from '../../../img/Screenshot_20230307-184023_Instagram.jpg'
// import img3 from '../../../img/Screenshot_20230211-104218_Instagram.jpg'
// import img4 from '../../../img/Screenshot_20230307-183922_Instagram.jpg'

const Card2 = () => {

    const data = [
        {
            title: "Award winning broadcast",
            content: "As an Award winning broadcast, Gloria has a special love for the radio. In show of her excellence, she won the Nigeria's 25 under 25 awards for Media & Communication in 2021.",
            content2: "She has had the privileges of working in different radio stations and she conducts interviews with celebrities and Renowned personalities whilst driving conversation that can change the community.",
            content3: "",
            img: img,
            gallery1: "https://www.instagram.com/reel/CWlmR_Zjt4t/?utm_source=ig_web_copy_link",
            gallery2: "https://www.instagram.com/p/CIvxyYEBYWu/?utm_source=ig_web_copy_link",
            gallery3: "https://www.instagram.com/p/CHyBo6rhp9O/?utm_source=ig_web_copy_link"
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
