import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont2.css'

import prof2 from '../../img/IMG_9717.jpg'
import img1 from '../../img/IMG_9675.jpg'
import img2 from '../../img/IMG_9623.jpg'
import img3 from '../../img/IMG_9585.jpg'
import img4 from '../../img/IMG_9630.jpg'

const Cont2 = () => {

    const data2 = [
        {
            title: "Why you should this offer and apply.",
            content: "over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4,
            img: prof2
        }
    ]

    const con2 = data2.map((item) =>{
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
    <div className='cont2'>
      {con2}
    </div>
  )
}

export default Cont2
