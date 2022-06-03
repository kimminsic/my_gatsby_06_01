import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../../components/CodeBlock";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import kebabCase from "lodash.kebabcase";
const components = {
  //코드 스타일링
  code: CodeBlock,
};

const BlogPost = ({ data }) => {
  const tags = data.mdx.frontmatter.tags;
  const image =
    data.mdx.frontmatter.hero_image &&
    getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={data.mdx.frontmatter.hero_image_credit_link}
            >
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
        </>
      )}
      <hr />
      <MDXProvider components={components}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
      <hr />
      <div style={{ textAlign: "center", color: "gray" }}>
        TAGS: {tags && tags.join(", ")}
      </div>
      <div style={{ textAlign: "right" }}>
        <Link to="/blog">back</Link>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text

        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }

      body
    }
  }
`;

export default BlogPost;
