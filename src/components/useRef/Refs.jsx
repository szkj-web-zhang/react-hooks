import React, { useEffect, useRef } from "react";
import useForm from "../useState/useForm";

const Refs = () => {
  const [values, setValues] = useForm({ email: "", password: "" });

  const eamilRef = useRef();

  useEffect(() => {
    console.log("email change mount");
  }, [values.email]);

  return (
    <div>
      <button onClick={() => eamilRef.current.focus()}>focus</button>
      <input
        ref={eamilRef}
        type="email"
        name="email"
        value={values.email}
        onChange={setValues}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={setValues}
      />
    </div>
  );
};

export default Refs;
