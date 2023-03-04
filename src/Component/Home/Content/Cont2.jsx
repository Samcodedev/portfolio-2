import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont2.css'

import prof2 from '../../img/IMG-20230301-WA0045.jpg'
import img1 from '../../img/IMG_9675.jpg'
import img2 from '../../img/IMG_9623.jpg'
import img3 from '../../img/IMG_9585.jpg'
import img4 from '../../img/IMG_9630.jpg'

const Cont2 = () => {

    const data2 = [
        {
            title: "THE SOARING CONFERENCE",
            content: "She also was the Host of the Soaring Conference 2022 tagged 'The Kingdom-life on Earth' convened by Aleriwa Tosin. The conference was set to put a balance between Faith, Lifestyle and Finance. Gloria as the compare did a great job.",
            content2: "The Ministers who graced the Conference included the Renowned Profitable Investor in person of Pastor Ejimi Olukeji, Funto Ibuoye who is a market place Apostle, Minister Olunayo Adebayo and Pastor David Alabi.",
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
