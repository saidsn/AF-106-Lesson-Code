import React, { useEffect, useState } from "react";
import "./App.css";

const Render = () => {
  const [firstInputValue, setFirstInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  let [result, setResult] = useState(0);

  let NotEmpty = () => {
    if (firstInputValue === "" || secondInputValue === "") {
      alert("Please enter a number");
      return;
    }
  };

  const Sum = () => {
    NotEmpty();
    result = Number(firstInputValue) + Number(secondInputValue);
    setResult(result);
    setFirstInputValue("");
    setSecondInputValue("");
  };
  const Minus = () => {
    NotEmpty();
    result = Number(firstInputValue) - Number(secondInputValue);
    setResult(result);
    setFirstInputValue("");
    setSecondInputValue("");
  };
  const Mult = () => {
    NotEmpty();
    result = Number(firstInputValue) * Number(secondInputValue);
    setResult(result);
    setFirstInputValue("");
    setSecondInputValue("");
  };
  const Devide = () => {
    NotEmpty();
    if (Number(secondInputValue) === 0) {
      console.log("You can't divide by zero");
    } else {
      result = Number(firstInputValue) / Number(secondInputValue);
      setResult(result);
    }

    setFirstInputValue("");
    setSecondInputValue("");
  };

  return (
    <div>
      <input
        type="number"
        value={firstInputValue}
        onChange={(e) => setFirstInputValue(e.target.value)}
      />
      <input
        type="number"
        value={secondInputValue}
        onChange={(e) => setSecondInputValue(e.target.value)}
      />
      <p>{result}</p>
      <button onClick={() => Sum()}>+</button>
      <button onClick={() => Minus()}>-</button>
      <button onClick={() => Mult()}>*</button>
      <button onClick={() => Devide()}>/</button>
    </div>
  );
};

export default Render;
