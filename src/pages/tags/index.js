import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
const TagList = ({ data }) => {
  const tags = data.allMdx.distinct;
  return (
    <Layout pageTitle="About Tags">
      <div>{tags.join(", ")}</div>
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
