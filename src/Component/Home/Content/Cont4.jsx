import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont4.css'

import prof2 from '../../img/053.jpg'
import img1 from '../../img/013.jpg'
import img2 from '../../img/009.jpg'
import img3 from '../../img/IMG_9585.jpg'
import img4 from '../../img/IMG_20221116_121821_861s.jpg'

const Cont4 = () => {

    const data4 = [
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

    const con4 = data4.map((item) =>{
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
    <div className='cont4'>
      {con4}
    </div>
  )
}

export default Cont4
