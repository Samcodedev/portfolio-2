import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont3.css'

import prof3 from '../../img/IMG-20230301-WA0047.jpg'
import img1 from '../../img/Screenshot_20230307-183106_Instagram.jpg'
import img2 from '../../img/Screenshot_20230307-183444_Instagram.jpg'
import img3 from '../../img/Screenshot_20230307-183348_Instagram.jpg'
import img4 from '../../img/Screenshot_20230307-183449_Instagram.jpg'

const Cont3 = () => {

    const data3 = [
        {
            title: "EVENTUALITY",
            content: "In 2022, Gloria anchored the 4th Edition of Eventually organized by Eventecure. Eventually is a non-profitable conference set to give back to entrepreneurs and businesses in the event industry.",
            content2: "The Conference had it's aim to focus on how businesses can create structure in what they do and how it can outline them to remain as a legacy",
            content3: "It brought to it's platform distinguished and renowned speakers Gloria did what she loves best the best way.",
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4,
            img: prof3
        }
    ]

    const con3 = data3.map((item) =>{
        return(
            <ContCard 
                title={item.title}
                content={item.content}
                img={item.img}
                data={item}
            />
        )
    })

  return (
    <div className='cont3'>
      {con3}
    </div>
  )
}

export default Cont3
