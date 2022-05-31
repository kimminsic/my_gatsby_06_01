import React from "react";
import { Link } from "gatsby";

function Layout({ PageTitle, Children }) {
  return (
    <div>
      <main>
        <h1>{PageTitle}</h1>
        {Children}
      </main>

      <nav>
        <ul>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/test">Test Page</Link>
          </li>
          <li>
            <Link to="/test-space">Test-Space Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
