import React from "react"
import Layout from '../components/layout'
import Hero from '../components/sections/hero'
import About from '../components/sections/about'
import Work from '../components/sections/work'

const IndexPage = () => {
  return (
    <Layout id='home'>
      <Hero />
      <About />
      <Work />
    </Layout>
  )
}

export default IndexPage