import React from 'react'
import './Testimony.css'
import TesCard from '../../Comp/TesCard.jsx';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'

import img1 from '../../img/IMG_20221116_121815_546s.jpg'
import img2 from '../../img/profile-2.png'
import img3 from '../../img/IMG_20221116_121837_854s.jpg'
import img4 from '../../img/IMG_20221116_121815_546s.jpg'
import img5 from '../../img/profile-2.png'
import img6 from '../../img/IMG_20221116_121837_854s.jpg'


const Testimony = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


    const content = [
        {
            name: "Ogundoju Joshua",
            content: "There was a time i could not stop going to Pastor Leye house because there is always something new to learn, there is always wisdom to share and words you have never heard before waiting for you. I can't just imagine life without him.",
            job: "Teacher, Banker",
            img: img5
        },
        {
            name: "Dafe Richards",
            content: "pastor lee is not a pastor by title; he is a pastor by heart and a shepherd by results. He's one that never leaves the one behind, he's an instructor in righteousness and an apt teacher of the word of grace. His accessibility and availability to tend the flock are phenomenal.",
            job: "Storytelling Genius, Content King",
            img: img6
        },
        {
            name: "Aina Daniel",
            content: "Coach Leye has been my pastor and life coach. I have had sessions with him and i can say that he has transformed my life from a life of indecision into a meaningful and more precise one. Upthrust was an event he hosted and that event projected me into the financial market and i am so gad i was present.",
            job: "Student, Forex Trader",
            img: img1
        },
        {
            name: "Labade Festus",
            content: "Pastor Leye happens to be my pastor and i can say ever since i met him, he made the word of God look so easy, he has mentored me in so many areas of my life and he is a man i know that is so keen in seeing me prosper. A session with Him would get you thanking God for the rest of your life.",
            job: "Student, Cordwainer",
            img: img2
        },
        {
            name: "Obanla Samuel",
            content: "Pastor leye is more than a coach or pastor to me, He is a Father, i can say that confidently because my journey as a programmer started with him, he ensure i layed my hands on a technical skill and be consistent with it.",
            job: "Student, Programmer",
            img: img3
        },
        {
            name: "Dotun Collins",
            content: "Pastor leye is my Man of God and i am glad saying this because prior to the time i joined the Kings' Hub, I have heard of the wonders of God with the hearings of the ears but suddenly there was a turn around, i could pray in the holy ghost and could hear God speak to me, How can i explain getting a job i did not apply for at all.",
            job: "Fashion Illustrator",
            img: img4
        }
    ]

    const data = content.map((item) =>{
        return(
            <TesCard 
                name={item.name}
                content={item.content}
                job={item.job}
                img={item.img}
            />
        )
    })

  return (
    <div className='testimony' >
        {/* <div className="fade"></div>
        <div className="fade2"></div> */}
        <motion.div className="carousel" ref={carousel} whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner">
                {data}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Testimony
