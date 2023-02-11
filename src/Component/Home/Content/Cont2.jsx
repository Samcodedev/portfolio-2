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
            title: "Hapag-Lioyd",
            content: "Gloria Olufeko, she's also an international host and compere, hosted Hapag-Lioyd and the Youthspark Leadership X-change and mentorship program in Kigali Rwanda.",
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
