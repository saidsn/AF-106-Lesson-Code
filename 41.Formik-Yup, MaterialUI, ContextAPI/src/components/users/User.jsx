import React, { useContext } from "react";
import { userList } from "../../context/UserContext";

const User = () => {
  const {users} = userList();
  return (
    <div>
      {users.map((user) => (
        <li key={user.id} style={{ listStyle: "none" }}>
          {user.name}
        </li>
      ))}
    </div>
  );
};

export default User;
