import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont3.css'

import prof3 from '../../img/IMG_8340.jpg'
import img1 from '../../img/IMG_9469.jpg'
import img2 from '../../img/IMG_9442.jpg'
import img3 from '../../img/IMG_9525.jpg'
import img4 from '../../img/IMG_9506.jpg'

const Cont3 = () => {

    const data3 = [
        {
            title: "Real Estate Excellence Awards 2022",
            content: "Gloria Olufeko, she's also a real estate event host, hosted series of real estate award winning events and also hosted the Real Estate Excellence Awards 2022 and other events.",
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
