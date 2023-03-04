import React from 'react'
import ContCard from '../../Comp/ContCard'
import './Cont1.css'

import prof1 from '../../img/ABC_DAYONE-12 (1).JPG'
import img1 from '../../img/ABC_DAYONE-11 (1).JPG'
import img2 from '../../img/ABC_DAYONE-150.JPG'
import img3 from '../../img/ABC_DAYONE-151.JPG'
import img4 from '../../img/ABC_DAYONE-185 (1).JPG'


const Cont1 = () => {
    const data1 = [
        {
            title: "ABC CONFERENCE",
            content: "Gloria was a co-host in The Conference(The Art, Business & Creativity) 2021 championed by the Gazma Education. It was a conference that brought together many high professionals who are distinct in their career path",
            content2: "such as the Fire brand Debola Deji-Kurunmi, the renowned energetic speaker John Obidi and a living legend in Photography that is in person of Dayo Adedayo.",
            content3: "It was a conference set to expound on the career of Art, Business and Creativity and Gloria did what she loves best in a spectacular way. ",
            gallery1: img1,
            gallery2: img2,
            gallery3: img3,
            gallery4: img4,
            img: prof1
        }
    ]

    const con1 = data1.map((item) =>{
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
    <div className='cont1'>
      {con1}
    </div>
  )
}

export default Cont1
