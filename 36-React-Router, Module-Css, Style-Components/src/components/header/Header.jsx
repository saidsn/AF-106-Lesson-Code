import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header id={style.head}>
      <div className="container">
        <div className={style.header}>
          <Logo />
          <h1 className={style.title}>Click</h1>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
