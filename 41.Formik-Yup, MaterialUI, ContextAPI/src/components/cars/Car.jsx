import React from "react";
import { userList } from "../../context/UserContext";

const Car = () => {
  const { cars } = userList();
  return (
    <div>
      {cars.map((car) => (
        <li key={car.id} style={{ listStyle: "none" }}>
          {car.name}
        </li>
      ))}
    </div>
  );
};

export default Car;
