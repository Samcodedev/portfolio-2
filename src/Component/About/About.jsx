import React from 'react'
import './About.css'
import AboutComp from '../Comp/AboutComp'
import prof from '../img/profile-2.png'
import img1 from '../img/IMG_7724.jpg'

const About = () => {

    const data = {
        title: "About Me ",
        content: "over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
        content2: "over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
        content3: "over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our website. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
        break: img1,
        img: prof
    }
  return (
    <div className='about'>
      <AboutComp 
        title ={data.title}
        content ={data.content}
        content2 ={data.content2}
        content3 ={data.content3}
        break ={data.break}
        img ={data.img}
      />
    </div>
  )
}

export default About
