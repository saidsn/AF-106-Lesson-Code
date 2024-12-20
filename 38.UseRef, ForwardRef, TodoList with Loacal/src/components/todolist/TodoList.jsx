import React, { useEffect, useState } from "react";
import "./TodoList.css";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  const inputRef = useRef(null);

  const addTodo = (e) => {
    e.preventDefault();

    const todo = inputRef.current.value;

    if (todo !== "") {
      const newTodo = {
        id: uuidv4(),
        todo,
      };

      setTodos([...todos, newTodo]);
    }

    // inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    let findIndex = todos.findIndex((item) => item.id === id);
    todos.splice(findIndex, 1);
    setTodos([...todos]);
  };

  const openModal = (item) => {
    setShowModal(true);
    setEditTodo(item);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((item) =>
      item.id === editTodo.id ? { ...item, todo: editTodo.todo } : item
    );
    setTodos(updatedTodos);
    setShowModal(false);
    setEditTodo({});
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your todo has been updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    inputRef.current.value = "";
  }, [todos]);

  return (
    <div className="container">
      {showModal ? (
        <div className="editTask">
          <form onSubmit={updateTodo}>
            <input
              value={editTodo.todo || ""}
              id="input"
              type="text"
              placeholder="Edit your todo"
              onChange={(e) => {
                setEditTodo({ ...editTodo, todo: e.target.value });
              }}
            />
            <button id="add" className="btn" type="submit">
              Edit Todo
            </button>
          </form>
        </div>
      ) : (
        <div className="addTask">
          <form onSubmit={addTodo}>
            <input
              id="input"
              type="text"
              placeholder="Add your todo"
              ref={inputRef}
            />
            <button id="add" className="btn" type="submit">
              Add Todo
            </button>
          </form>
        </div>
      )}
      <div className="taskList">
        <ul className="list">
          {todos &&
            todos.map((item) => (
              <li key={item.id}>
                {item.todo}
                <div className="setting">
                  <div className="btn">
                    <MdDelete
                      size={23}
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    />
                  </div>
                  <div className="btn">
                    <FaEdit
                      size={23}
                      onClick={() => {
                        openModal(item);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
