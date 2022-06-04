import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const titleArr = ({data}) =>{
  return(
  <Layout pageTitle={"HTML"}>
  {data.allMdx.nodes.map((node)=>(
    <article key={node.id}>
      <h2>
        <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
      </h2>
    </article>
  ))}
  </Layout>
  );
};

export const query=graphql`
{
  allMdx(filter: {frontmatter: {tags: {eq: "HTML"}}}) {
    nodes {
      frontmatter {
        title
      }
      slug
    }
  }
}
`

export default titleArr;