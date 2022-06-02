import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container} style={{ border: "2px solid gray" }}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header
        style={{
          fontSize: "3rem",
          color: "gray",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {data.site.siteMetadata.title}
      </header>

      <nav>
        <ul className={navLinks} style={{ justifyContent: "space-around" }}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog/">
              blog
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <div style={{ textAlign: "center" }}>CopyRight All Rights</div>
    </div>
  );
}

export default Layout;
