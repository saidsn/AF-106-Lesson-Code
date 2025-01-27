import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>LOGO</h2>
      <ul className="navlist">
        <li className="navlist-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navlist-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="navlist-item">
          <Link to="/admin">AdminPanel</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
