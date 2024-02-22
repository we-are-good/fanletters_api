import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  const onChangehandler = (event) => {
    const { name, value } = evnet.target;
    setFormState((prev) => ({ ...prev, name: vlaue }));
  };
  const resetForm = () => {
    setFormState(initialState);
  };
  return { formState, onChangehandler, resetForm };
};

export default useForm;
