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
            <h4>{props.name}</h4>
            <span>{props.job}</span>
        </div>
    </div>
  )
}

export default TesCard
