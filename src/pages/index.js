import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Gatsby Tutorial</p>

      <br />
      <StaticImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO40gjNWRtv3SyGWUGkcM-GPk92KQCLlY2A&usqp=CAU"></StaticImage>
    </Layout>
  );
};

export default IndexPage;
