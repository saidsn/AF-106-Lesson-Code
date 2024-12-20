import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
