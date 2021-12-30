import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => (
  <nav className="main-nav">
    <ul>
      <li>
        <Link to="/sunsets" onClick={() => onSearch("sunsets")}>
          Sunsets
        </Link>
      </li>
      <li>
        <Link to="/waterfalls" onClick={() => onSearch("waterfalls")}>
          Waterfalls
        </Link>
      </li>
      <li>
        <Link to="/rainbows" onClick={() => onSearch("rainbows")}>
          Rainbows
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
