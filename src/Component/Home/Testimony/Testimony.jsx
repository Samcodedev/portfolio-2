import React from 'react'
import './Testimony.css'
import TesCard from '../../Comp/TesCard.jsx';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'

import img1 from '../../img/tedx.jpg'
import img2 from '../../img/IMG-20230303-WA0004.jpg'
import img5 from '../../img/haplogo.jpg'
import img6 from '../../img/IMG-20230303-WA0006.jpg'


const Testimony = () => {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


    const content = [
        {
            name: "Hapag Llyod",
            content: "Thanks you for making our event such a great and memorable one, everyone event guest came back to say it was an awesome event. Thanks",
            job: "Teacher, Banker",
            img: img5
        },
        {
            name: "YouthSpark PanAfrica",
            content: "Hey Gloria. I just wanted to thank you for bringing in so much energy and life to this edition of YouthSpark program here in Rwanda. Thank you Gloria foe all the effort to see & understand my unspoken words. Thank you so much Bosslady.",
            job: "Storytelling Genius, Content King",
            img: img6
        },
        {
            name: "Tedxjibowu",
            content: "You truly smashed it Gloria Olufeko. Thanks you Gloria for bringing your A-Game to TEDxjibowu. Alongside our co-host, you effectively controlled the audience and drove us through an extraordinarily successful event. We are super glad to have had you host us. Thanks",
            job: "Student, Forex Trader",
            img: img1
        },
        {
            name: "Nigeria Healthcare Investment Forum",
            content: "Thank you Gloria Olufeko for your support and participation. We look forward to future productive partnership.",
            job: "Student, Cordwainer",
            img: img2
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
