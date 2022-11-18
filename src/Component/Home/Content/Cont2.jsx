import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont2.css'

import prof2 from '../../img/profile-2.png'

const Cont2 = () => {

    const data2 = [
        {
            title: "Why you should this offer and apply.",
            content: "over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee. over 10,000+ talented people registered in our websitee.",
            img: prof2
        }
    ]

    const con2 = data2.map((item) =>{
        return(
            <ContCard 
                title={item.title}
                content={item.content}
                img={item.img}
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
