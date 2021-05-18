import React, { useState } from "react";
import Usestate from "./Usestate";

const useForm = (initValue) => {
  const [values, setValues] = useState(initValue);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;
