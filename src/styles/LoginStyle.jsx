import styled from "styled-components";

export const LoginWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 20px;
  margin: 30px;
  border-radius: 20px;
  gap: 20px;
  background-color: #c9ffc6;
  border: 5px solid greenyellow;
`;

export const LoginTag = styled.span`
  font-size: 30px;
  font-weight: 800;
`;

export const InputTags = styled.div`
  width: 500px;

  & input {
    background-color: white;
    width: 500px;
    height: 50px;
    border-bottom: 3px solid black;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const BigButton = styled.button`
  background-color: white;
  font-size: 25px;
  font-weight: 700;
  width: 500px;
  height: 50px;
  border-radius: 20px;
`;

export const SmallButton = styled.button`
  background-color: #d1fa92;
  font-size: 15px;
  font-weight: 400;
  width: 500px;
  height: 30px;
  border-radius: 20px;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
