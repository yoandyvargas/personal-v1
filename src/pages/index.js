import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import Work from '../components/work'

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
    </Layout>
  )
}

export default IndexPage