import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <p>My</p>
      <StaticImage src="https://img.extrememanual.net/2018/12/google_g_title.jpg"></StaticImage>
    </Layout>
  );
}

export default AboutPage;
