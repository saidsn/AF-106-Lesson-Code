import React from "react";
import "./Navbar.css";

let navList = ["Home", "Services", "Contact", "Blog"];

const Navbar = () => {
  return (
    <div>
      <ul className="list">
        {navList.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
