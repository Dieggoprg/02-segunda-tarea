import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setValues(initialValue);
  };

  return {
    values,
    ...values,
    handleChange,
    handleReset,
  };
};
