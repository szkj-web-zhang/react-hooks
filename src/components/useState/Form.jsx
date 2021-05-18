import React, { useState, useEffect } from "react";
import useForm from "../useState/useForm";

const Form = () => {
  const [values, setValues] = useForm({ email: "", password: "" });

  useEffect(() => {
    console.log("email change mount");
  }, [values.email]);

  return (
    <div>
      <input
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

export default Form;
