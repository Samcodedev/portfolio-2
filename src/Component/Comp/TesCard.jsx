import React from 'react'
import './TesCard.css'

const TesCard = (props) => {
  return (
    <div className='tescard'>
        <div className="img-div">
            <img src={props.img} alt="" />
        </div>
        <div className="text-div">
            <p>{props.content}</p>
            <span>{props.name}</span>
        </div>
    </div>
  )
}

export default TesCard
