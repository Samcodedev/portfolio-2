import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont4.css'

import prof2 from '../../img/IMG_2536.jpg'
import img1 from '../../img/IMG_2538.jpg'
import img2 from '../../img/IMG_2581.jpg'
import img3 from '../../img/IMG_2784.jpg'
import img4 from '../../img/IMG_2827.jpg'

const Cont4 = () => {

    const data4 = [
        {
            title: "THE RECALIBRATE",
            content: "She also hosted the Recalibrate Conference in 2022 convened by Funto Ibuoye. This conference like no other was a spectacular meeting which was a blessing.",
            content2: "For whatever meeting it is, Gloria hosts it well and it is always beyond your imagination.",
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
