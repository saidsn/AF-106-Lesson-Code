import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 5000;
app.use(express.json());

let { users } = JSON.parse(fs.readFileSync("db.json"));

app.get("/", (req, res) => {
  res.send("Hello AF106!");
});

const getAll = (req, res) => {
  try {
    res.status(200).send({ message: "Success", data: users });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const getById = (req, res) => {
  try {
    const { id } = req.params;

    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "Success", data: user });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const addUser = (req, res) => {
  try {
    const newUser = req.body;

    if (!newUser.name || !newUser.age) {
      return res.status(400).send({ message: "Bad request" });
    }

    users.push({ id: uuidv4(), ...newUser });

    fs.writeFileSync("db.json", JSON.stringify({ users }));

    res.status(201).send({ message: "User created", data: newUser });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const deleteById = (req, res) => {
  try {
    const { id } = req.params;

    const existUserIndex = users.findIndex((user) => user.id === id);

    if (existUserIndex === -1) {
      return res.status(404).send({ message: "User not found" });
    }

    users.splice(existUserIndex, 1);

    fs.writeFileSync("db.json", JSON.stringify({ users }));

    res.status(200).send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const updateById = (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = req.body;

    const existUserIndex = users.findIndex((user) => user.id === id);

    if (existUserIndex === -1) {
      return res.status(404).send({ message: "User not found" });
    }

    users[existUserIndex] = { id, ...updatedUser };

    fs.writeFileSync("db.json", JSON.stringify({ users }));

    res
      .status(200)
      .send({ message: "User updated", data: users[existUserIndex] });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const patchById = (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = req.body;

    const existUserIndex = users.findIndex((user) => user.id === id);

    if (existUserIndex === -1) {
      return res.status(404).send({ message: "User not found" });
    }

    users[existUserIndex] = { ...users[existUserIndex], ...updatedUser };

    fs.writeFileSync("db.json", JSON.stringify({ users }));

    res
      .status(200)
      .send({ message: "User updated", data: users[existUserIndex] });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

app.get("/api/users", getAll);
app.get("/api/users/:id", getById);
app.post("/api/users", addUser);
app.delete("/api/users/:id", deleteById);
app.put("/api/users/:id", updateById);
app.patch("/api/users/:id", patchById);

app.listen(port, () => {
  console.log(`Server is running on port ${`http://localhost:${port}/`}`);
});
