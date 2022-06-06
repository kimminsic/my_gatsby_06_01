import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const titleArr = ({data}) =>{
  return(
  <Layout pageTitle={"NODEJS"}>
  {data.allMdx.nodes.map((node)=>(
    <article key={node.id}>
      <h2>
        <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
        </h2>
        <p>Posted: {node.frontmatter.date}</p>
      </article>
  ))}
  </Layout>
  );
};

export const query=
graphql`
{
  allMdx(filter: {frontmatter: {tags: {eq: "NODEJS"}}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM,D YYYY")
      }
      slug
    }
  }
}
`


export default titleArr;
