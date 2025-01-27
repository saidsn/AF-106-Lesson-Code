import { useEffect, useRef, useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoList from "./components/todolist/TodoList";

function App() {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // const stateIncrement = () => {
  //   setCount(count + 1);
  // };

  // const refIncrement = () => {
  //   countRef.current += 1;
  //   console.log(countRef.current);
  // };

  // console.log("render");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  return (
    <>
      <TodoList />
      {/* <Input ref={inputRef} /> */}
      {/* <p>{count}</p>
      <p>Countref: {countRef.current}</p>
      <button
        onClick={() => {
          stateIncrement();
        }}
      >
        stateIncrement
      </button>
      <button
        onClick={() => {
          refIncrement();
        }}
      >
        refIncrement
      </button> */}
    </>
  );
}

export default App;
