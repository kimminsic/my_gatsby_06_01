import React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";
function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
      <title>{pageTitle}</title>

      <nav>
        <ul className={navLinks}>
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
        </ul>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>

      <div>CopyRight All Rights</div>
    </div>
  );
}

export default Layout;