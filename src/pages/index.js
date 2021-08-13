import React from "react";
import { Hero, Work, Projects, Contact, About, Layout } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
