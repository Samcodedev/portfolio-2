import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont7.css'

import prof3 from '../../img/IMG_9717.jpg'
import img1 from '../../img/IMG_9675.jpg'
import img2 from '../../img/IMG_9623.jpg'
import img3 from '../../img/IMG_9585.jpg'
import img4 from '../../img/IMG_9630.jpg'

const Cont7 = () => {

    const data3 = [
        {
            title: "HAPAG LLYOD",
            content: "For the celebration of Hapallog's 175th Anniversary and it's 2nd year Existence in Nigeria, Gloria Olufeko had the honours to be the compere of the event. Hapag Llyod a renowned brand in the shipping industry has over the years, continued to be a global leader in the field.",
            content2: "The event was a celebration of their hard work over the years and Gloria directed the affairs of this event from the start to finish which had a smooth flow of event.",
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

export default Cont7
