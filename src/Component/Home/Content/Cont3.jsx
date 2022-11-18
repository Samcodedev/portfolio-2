import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont3.css'

import prof3 from '../../img/IMG_20221116_121815_546s.jpg'

const Cont3 = () => {

    const data3 = [
        {
            title: "Am excited for this offer and apply.",
            content: "over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
            img: prof3
        }
    ]

    const con3 = data3.map((item) =>{
        return(
            <ContCard 
                title={item.title}
                content={item.content}
                img={item.img}
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
