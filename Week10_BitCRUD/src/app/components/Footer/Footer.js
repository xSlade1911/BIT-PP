import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        © {new Date().getFullYear()} BIT
        <span className="grey-text text-lighten-4 right"><Link to='/login'>Sign in</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
