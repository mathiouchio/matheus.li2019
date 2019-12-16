import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link
          to={{
            pathname: "/",
            hash: "#about"
          }}
        >
          <span>01</span> about
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/",
            hash: "#portfolio"
          }}
        >
          <span>02</span> work
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/",
            hash: "#posts"
          }}
        >
          <span>03</span> blog
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: "/",
            hash: "#contact"
          }}
        >
          <span>04</span> connect
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
