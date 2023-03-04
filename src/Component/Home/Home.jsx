import React from 'react'
import Content from './Content/Content'
import Head from './Head/Head'
import NewsLetter from './NewsLetter/NewsLetter'
import Skill from './Skill/Skill'
import Testimony from './Testimony/Testimony.jsx'
import Title from './Title/Title'

const Home = () => {

  const title = {
    title: "Recently Hosted Event",
    sub: "Check out to know more about me in each of my career part and recently hosted event and work."
  }

  const testimony = {
    title: "Valuable Testimony",
    sub: "Check out what my clients say and you can have a better idea about my work, eligibility and success rate."
  }

  return (
    <div>
      <Head />
      <Skill />
      <Title 
        title={title.title}
        sub={title.sub}
      />
      <Content />
      <Title
        title={testimony.title}
        sub={testimony.sub}
      />
      <Testimony />
      <NewsLetter />
    </div>
  )
}

export default Home
