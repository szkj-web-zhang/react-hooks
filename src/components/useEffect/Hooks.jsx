import React, { useMemo, useState } from "react";
import useFetch from "./useFeach";

const coumputeLongestWord = (arr) => {
  if (!arr) {
    return [];
  }

  console.log("coumpute Longest Word");

  let longestWord = "";
  JSON.parse(arr).forEach((sentense) => {
    sentense.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  });
  return longestWord;
};

const Hooks = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  const longestWord = useMemo(
    () => coumputeLongestWord(data),
    [data, coumputeLongestWord]
  );

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        increment
      </button>
      <div>count:{count}</div>
      <div>{longestWord}</div>
    </div>
  );
};

export default Hooks;
