import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        name: action.value,
      };
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        name: action.name,
      };
      return {
        name: "",
        todos: [...state.todos, newTodo],
      };
    case "DELETE_TODO":
      const findIndex = state.todos.findIndex((todo) => todo.id === action.id);
      if (findIndex !== -1) {
        state.todos.splice(findIndex, 1);
      }

      return {
        ...state,
        todos: [...state.todos],
      };
    case "EDIT_TODO":
      const prmptTodo = prompt("Edit todo", action.todo.name);

      const newTodos = state.todos.map((todo) =>
        todo.id === action.todo.id ? { ...todo, name: prmptTodo } : todo
      );

      return {
        ...state,
        todos: newTodos,
      };
  }
};

export default reducer;
