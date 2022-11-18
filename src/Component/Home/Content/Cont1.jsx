import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont1.css'

import prof1 from '../../img//IMG_20221116_121837_854s.jpg'

const Cont1 = () => {
    const data1 = [
        {
            title: "Grab this exciting offer and apply.",
            content: "over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
            img: prof1
        }
    ]

    const con1 = data1.map((item) =>{
        return(
            <ContCard 
                title={item.title}
                content={item.content}
                img={item.img}
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
