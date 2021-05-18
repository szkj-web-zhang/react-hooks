import React, { useRef, useState, useCallback } from "react";
import Usestate from "./components/useState/Usestate";
import Form from "./components/useState/Form";
import Fetch from "./components/useEffect/Fetch";
import Refs from "./components/useRef/Refs";
import Hooks from "./components/useEffect/Hooks";
import Reducer from "./components/useReducer/Reducer";
import Todo from "./components/useReducer/Todo";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [setCount]);

  return (
    <div>
      <Usestate />
      -----------------------------
      <Form />
      <Fetch />
      <Refs />
      ------------------------------------------------------
      <br />
      <Hello increment={increment} />
      <div>count:{count}</div>
      --------------------------------------------------------
      <Hooks />
      ---------------------------------------------------------
      <Reducer />
      -------------------------------------------------
      <Todo />
    </div>
  );
};

const Hello = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log("render", renders.current++);

  return <button onClick={increment}>increment</button>;
});

export default App;
