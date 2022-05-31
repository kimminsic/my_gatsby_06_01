import React from "react";
import { Link } from "gatsby";

function TestPage() {
  return (
    <main>
      <title>테스트 페이지</title>
      <h1>테스트 페이지 입니다.</h1>
      <Link to="/">Back</Link>
    </main>
  );
}

export default TestPage;
