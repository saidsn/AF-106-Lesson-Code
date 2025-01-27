import React from "react";
// import './Button.css'

const Button = ({ children, style, type }) => {
  return (
    <button type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;
