import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(
    initialForm /*{
    username: "",
    email: "",
    password: "",
  }*/
  );

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    //console.log(target.value);
  };
  return { ...formState, formState, onInputChange, onResetForm };
};
