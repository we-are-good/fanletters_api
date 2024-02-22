import { useState } from "react";

const [formatState, setFormState] = useState({
  id: "",
  password: "",
  nickname: "",
});

const { id, password, nickname } = formatState;
const onChangeHandler = (event) => {
  const { name, value } = event.target;
  setFormState((prev) => ({ ...prev, [name]: value }));
};

//input 등에 name, value, onChange 설정
