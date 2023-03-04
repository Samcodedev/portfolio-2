import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont5.css'

import prof3 from '../../img/IMG_9168.jpg'
import img1 from '../../img/IMG_8881.jpg'
import img2 from '../../img/IMG_9390.jpg'
import img3 from '../../img/IMG_8881-1.jpg'
import img4 from '../../img/IMG_8690.jpg'

const Cont5 = () => {

    const data3 = [
        {
            title: "YOUTHSPARK PAN-AFRICA",
            content: "Gloria as an international Event Compere in 2022 hosted the Youthspark Leadership X-Change & Mentorship Program hosted by Youthspark Africa in Kigali, Rwanda.",
            content2: "It was a Conference which hosted over 22 participants from across Africa. Present at the event were Honorable Commissioners, the Founder and Convener of YouthSpark Pan-Africa. The Speakers were international and Uber talented.",
            content3: "Gloria coordinated the event and it was a smooth move.",
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

export default Cont5
