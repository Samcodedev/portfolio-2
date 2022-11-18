import React from 'react'
import Content from './Content/Content'
import Head from './Head/Head'
import Skills from './Skills/Skills'
import Testimony from './Testimony/Testimony.jsx'
import Title from './Title/Title'

const Home = () => {
  return (
    <div>
      <Head />
      <Skills />
      <Title />
      <Content />
      <Title />
      <Testimony />
    </div>
  )
}

export default Home
