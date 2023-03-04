import React from 'react'
import '../NewsLetter/NewsLetter.css'
// import {BsArrowRight} from 'react-icons/bs'

function NewsLetter() {
  return (
    <div className='newsLetter'>
      <div className="news-card">
        <h2>Subscribe to my news letter </h2>
        <a target="_blank" href="https://mail.google.com"><button>Subscribe</button></a>
      </div>
    </div>
  )
}

export default NewsLetter
