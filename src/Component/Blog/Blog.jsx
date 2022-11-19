import React from 'react'
import BlogComp from '../Comp/BlogComp'
import './Blog.css'
import { useLocation } from 'react-router-dom'

const Blog = () => {

    const location = useLocation()
    console.log(location.state.id)

  return (
    <div className='blog'>
      <BlogComp 
        data={location.state.id}
      />
    </div>
  )
}

export default Blog
