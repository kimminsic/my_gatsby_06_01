import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Gatsby Tutorial</p>
      <StaticImage alt="" src="../images/tiger.png"></StaticImage>
    </Layout>
  );
};

export default IndexPage;
