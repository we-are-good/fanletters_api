import React, { useState } from "react";
import { Form, InputWrapper, SelectWrapper } from "../styles/AddFormStyle";
import { v4 as uuid } from "uuid";
import Button from "../util/Button";
import { useDispatch } from "react-redux";
import { addLetter } from "../redux/modules/letters";

function AddForm() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("Ava Max");

  const onAddevent = (event) => {
    event.preventDefault();
    if (!nickname || !content) return alert("닉네임과 내용은 필수입니다.");

    const newLetter = {
      id: uuid(),
      nickname,
      content,
      avatar: null,
      writedTo: member,
      createdAt: new Date(),
    };

    dispatch(addLetter(newLetter));
    setNickname("");
    setContent("");
  };

  return (
    <Form onSubmit={onAddevent}>
      <InputWrapper>
        <label>닉네임:</label>
        <input
          onChange={(event) => setNickname(event.target.value)}
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용:</label>
        <textarea
          onChange={(event) => setContent(event.target.value)}
          value={content}
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
      </InputWrapper>
      <SelectWrapper>
        <label>누구에게 보내실 건가요?</label>
        <select onChange={(event) => setMember(event.target.value)}>
          <option>Ava Max</option>
          <option>IU</option>
          <option>Eminem</option>
          <option>Rihanna</option>
        </select>
      </SelectWrapper>
      <Button text="팬래터 등록" />
    </Form>
  );
}

export default AddForm;
