import React from 'react'
import './About.css'
import AboutComp from '../Comp/AboutComp'
import prof from '../img/profile-2.png'
import img1 from '../img/IMG_9504.jpg'
import img2 from '../img/Screenshot_20230211-104210_Instagram.jpg'
import img3 from '../img/IMG_9765.jpg'

const About = () => {

    const data = {
        title: "About Me ",
        content: "Hello, I’m Gloria Olufeko and welcome to my world. I am so excited to have you here. This is a platform where I can get to connect with my clients, share my values and career growth, From time-to-time, Gloria reaches out and mentors young up and coming individuals with a desire to build a career in the media. With her newsletter, “Gloria’s Letters to the Starizers”, she shares tips, advice and steps to start the journey to greatness and fulfil their God-given purpose.",
        content2: "Gloria is an award-winning broadcaster with special love for the radio. She enjoys conducting interviews with people ranging from discussions on family, women, health, marriage and relationships. Her unique voice keeps you glued to your radio set and this has earned her the love of her listeners, With a graduate degree in English Language, Gloria coaches and teaches diction and communication skills. She has been able to train over 1000 students online and offline, helping individuals and organisations improve their communication skills. ",
        content3: "Gloria is an excellent compere who has hosted myriads of events in and within Africa.  Clients describe Gloria as Professional, Put-together and Excellent. She has had several returning clients as a proof of her great delivery and poise, Her beautiful and dynamic voice is a selling point for Gloria as she has the ability to give life to your ideas both in video and audio format. Gloria is the voice behind some of the major brands you know. She voices adverts, jingles, books, documentaries, podcasts and the likes.",
        break: img1,
        break2: img2,
        break3: img3,
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
        break2 ={data.break2}
        break3 ={data.break3}
        img ={data.img}
      />
    </div>
  )
}

export default About
