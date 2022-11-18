import React from 'react'
import './ContCard.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContCard = (props) => {
  return (
    <div className='cont-card'>
      <div className="img-div">
        <img src={props.img} alt="" />
      </div>
      <div className="text-div">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Link><button>More <FaLongArrowAltRight fontSize="30px" /></button></Link>
      </div>
    </div>
  )
}

export default ContCard
