import { Link } from "gatsby";
import React from "react";

function Layout({children }) {
  return (
    <>
    
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">테스트-스페이스</Link>
      </div>
      <div>{children}</div>
      <div>CopyRight All</div>
    
    </>
  );
}

export default Layout;
