import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/news/first">First Link</Link>
            <Link href="/news/second">Second Link</Link>
            <Link href="/news/third">Third Link</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default News;
