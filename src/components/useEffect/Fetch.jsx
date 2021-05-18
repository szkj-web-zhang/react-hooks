import React, { useEffect, useState } from "react";
import useFetch from "../useEffect/useFeach";

const Fetch = () => {
  const [count, setCount] = useState(
    localStorage.getItem("count") === null
      ? 0
      : JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    //   缓存在localstroage中
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((params) => count + 1)}>
        change url
      </button>
      <div>{loading ? "loading..." : data}</div>
    </div>
  );
};

export default Fetch;
