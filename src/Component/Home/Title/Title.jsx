import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className='Title'>
        <div className="sub-Title">
            <h2>{props.title}</h2>
            <p>{props.sub}</p>
        </div>
    </div>
  )
}

export default Title
