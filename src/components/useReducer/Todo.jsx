import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.todo, completed: false }],
        todosCount: state.todosCount + 1,
      };
    case "REMOVE_TODO":
      console.log(state.todos);
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, completed: true } : todo
        ),
        todosCount: state.todosCount - 1,
      };
    default:
      return state;
  }
}

const Todo = () => {
  const [{ todos, todosCount }, dispatch] = useReducer(todoReducer, {
    todos: [],
    todosCount: 0,
  });
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", todo });
          setTodo("");
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </form>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            onClick={() => dispatch({ type: "REMOVE_TODO" }, index)}
            style={{ textDecoration: todo.completed ? "line-through" : "" }}
          >
            {todo.text}
          </div>
        );
      })}
      <div>todoCount:{todosCount}</div>
    </div>
  );
};

export default Todo;
