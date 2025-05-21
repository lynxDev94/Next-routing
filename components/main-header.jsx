import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
