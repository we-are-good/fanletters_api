import styled from "styled-components";

export default function Button({ text, onClick = () => {} }) {
  return (
    <BtnWrapper>
      <button onClick={onClick}>{text}</button>
    </BtnWrapper>
  );
}

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    background-color: #3a6cff;
    font-size: 20px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
  }
`;
