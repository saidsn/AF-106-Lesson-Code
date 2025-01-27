import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("Vusal");
  // const [users, setUsers] = useState(["Nihat", "Vusal", "Elvin", "Tural"]);
  // const [employee, setEmployee] = useState({
  //   name: "Elnur",
  //   age: 21,
  //   salary: 3000,
  // });
  // const [show, setShow] = useState(false);

  // const { name, age, salary } = employee;

  // const [count, setCount] = useState(0);

  // const Increment = () => {
  //   setCount(count + 1);
  // };

  // const Decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // console.log("Component render olundu");
  return (
    <>
      {/* <button onClick={() => Decrement()}>Decrement</button>
      <span> {count} </span>
      <button onClick={() => Increment()}>Increment</button> */}

      {/* {show ? <h1>{firstName}</h1> : <h1>Not Found</h1>}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        change
      </button> */}

      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}
      {/* <p>{name}</p>
      <p>{age}</p>
      <p>{salary}</p>
      <button
        onClick={() => {
          setEmployee({ ...employee, salary: 3200 });
        }}
      >
        chnage
      </button> */}
    </>
  );
}

export default App;
