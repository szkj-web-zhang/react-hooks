import React, { useState } from "react";

const Usestate = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 1, count2: 2 });
  return (
    <div>
      <button
        onClick={() => {
          setCount((state) => ({
            ...state,
            count1: state.count1 + 1,
          }));
        }}
      >
        +
      </button>
      <div>{count1}</div>
      <div>{count2}</div>
    </div>
  );
};

export default Usestate;
