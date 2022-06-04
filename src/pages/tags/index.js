import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";

const TagList = ({ data }) => {
  const tags = data.allMdx.distinct;
  return (
    <Layout pageTitle="About Tags">
    <ui style={{}}> {tags.map(tag => (<li key={tag}><Link to={`/tags/${tag}`}>{tag}</Link></li>))}</ui>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`;

export default TagList;
