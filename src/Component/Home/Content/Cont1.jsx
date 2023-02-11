import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont1.css'

import prof1 from '../../img/IMG_7711.jpg'
import img1 from '../../img/IMG_7685.jpg'
import img2 from '../../img/IMG_7695.jpg'
import img3 from '../../img/IMG_7646.jpg'
import img4 from '../../img/IMG_7921.jpg'


const Cont1 = () => {
    const data1 = [
        {
            title: "TEDX JIBOWU",
            content: "Gloria olufeko, she's an award-winning media personality, hosted Tedxjibowu and other award winning events in Nigeria.",
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4,
            img: prof1
        }
    ]

    const con1 = data1.map((item) =>{
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
    <div className='cont1'>
      {con1}
    </div>
  )
}

export default Cont1
