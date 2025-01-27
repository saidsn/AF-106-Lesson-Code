import React from "react";
import Button from "../button/Button";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-header">
      <h1>Welcome to Scrolling Nav</h1>
      <p>
        A functional Bootstrap 5 boilerplate for one page scrolling websites
      </p>
      <Button
        style={{
          backgroundColor: "aqua",
          border: "none",
          color: "black",
          padding: "10px",
          width: "150px",
          borderRadius: "5px",
        }}
      >
        Main button
      </Button>
    </div>
  );
};

export default Main;
