import React from "react";
import { Link } from "gatsby";

function Layout({ PageTitle, Children }) {
  return (
    <main>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>

        <Link to="/test">테스트</Link>

        <Link to="/test-space">테스트 스페이스</Link>
      </div>
      <div>빈칸</div>
      <div>CopyRight</div>
    </main>
  );
}

export default Layout;
