import React from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route 
} from 'react-router-dom'
import About from './About/About'
import Blog from './Blog/Blog'
import Home from './Home/Home'



const Component = () => {
  return (
    <Router>
        {/* <NavBar /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </Router>
  )
}

export default Component
