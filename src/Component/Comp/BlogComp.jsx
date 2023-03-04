import React from 'react'
import './BlogComp.css'

const BlogComp = (props) => {
  return (
    <div className='blog-comp'>
      <div className="img-div">
        <img src={props.data.img} alt="gloria" />
      </div>
      <div className="text-div">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
        <p>{props.data.content2}</p>
        <p>{props.data.content3}</p>
        <div className="gallery">
            <img src={props.data.gallery1} alt="gallery list" />
            <img src={props.data.gallery2} alt="gallery list" />
            <img src={props.data.gallery3} alt="gallery list" />
            <img src={props.data.gallery4} alt="gallery list" />
        </div>
      </div>
    </div>
  )
}

export default BlogComp
