import { useReducer, useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import reducer from "./reducers/TodoReducer";



function App() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    todos: [],
   });

  const setTodo = (e) => {
    dispatch({ type: "SET_TODO", value: e.target.value });
  };

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", name: state.name });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const editTodo = (todo) => {
    dispatch({ type: "EDIT_TODO", todo });
  };

  return (
    <>
      <h1>UseReducer</h1>
      <input value={state.name} type="text" onChange={setTodo} />
      <button onClick={addTodo}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none" }}>
            {   .name}
            <div>
              <MdDeleteForever
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              />
              <FaEdit
                onClick={() => {
                  editTodo(todo);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
