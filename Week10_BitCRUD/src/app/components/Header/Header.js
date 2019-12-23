import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <span className="left">
          CRUD
        </span>
        <ul id="nav-mobile" className="right">
          <li>
          <Link to='/posts'>Posts</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
