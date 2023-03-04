import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont6.css'

import prof2 from '../../img/IMG_7711.jpg'
import img1 from '../../img/IMG_7685.jpg'
import img2 from '../../img/IMG_7695.jpg'
import img3 from '../../img/IMG_7646.jpg'
import img4 from '../../img/IMG_7921.jpg'

const Cont6 = () => {

    const data4 = [
        {
            title: "TEDX JIBOWU",
            content: "Ever green TedX Jibowu organized by trailblazing Olorunfemi Prosperity and Denu Bon was hosted by Gloria Olufeko. The Phenomenal speaker who graced the occasion were Dr Olumide Emmanuel a renowned real estate coach, Steven Loya Future Minister of Education...",
            content2: "Tope Mark Odigie a TV Personality/ Real estate professional and Chinonson Fidelis Egemba aka aproko doctor.",
            content3: "Renowned personalities and dignitaries were in attendance. It was indeed a conference to be remembered.",
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

export default Cont6
