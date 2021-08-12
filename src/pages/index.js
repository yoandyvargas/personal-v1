import React from "react"
import Layout from '../components/layout'
import Hero from '../components/sections/hero'
import Work from '../components/sections/work'
import Projects from '../components/sections/projects'
import Contact from '../components/sections/contact'
import About from '../components/sections/about'

const IndexPage = () => {

  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage