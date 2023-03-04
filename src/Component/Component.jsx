import React from 'react'
import {
    BrowserRouter as Router,
    Routes, 
    Route 
} from 'react-router-dom'
import About from './About/About'
import Blog from './Blog/Blog'
import Error from './Error/Error'
import Footer from './Home/Footer/Footer'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Social from './Social/Social'
import Testing from './Testing'



const Component = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/test' element={<Testing />} />

            <Route path='/connect' element={<Social /> } />
            <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default Component
