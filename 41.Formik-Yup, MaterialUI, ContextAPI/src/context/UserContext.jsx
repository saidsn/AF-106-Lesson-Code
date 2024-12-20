import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

// const users = [
//   { id: 1, name: "Seda", age: 19 },
//   { id: 2, name: "Nergiz", age: 20 },
//   { id: 3, name: "Fatime", age: 19 },
//   { id: 4, name: "Aytac", age: 19 },
//   { id: 5, name: "Guler", age: 19 },
//   { id: 6, name: "Arzu", age: 19 },
// ];

// const cars = [
//   { id: 1, name: "BMW", year: 2024 },
//   { id: 2, name: "Mercedes", year: 2021 },
//   { id: 3, name: "Audi", year: 2021 },
//   { id: 4, name: "Renault", year: 2020 },
//   { id: 5, name: "Fiat", year: 2021 },
//   { id: 6, name: "Toyota", year: 2019 },
// ];

export const UserProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <UserContext.Provider value={{ posts }}>{children}</UserContext.Provider>
  );
};

export const userList = () => useContext(UserContext);
