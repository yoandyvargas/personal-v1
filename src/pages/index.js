import React from "react";
import { Hero, Work, Contact, About, Layout } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
