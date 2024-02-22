import styled from "styled-components";

export const HeaderTop = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 20px;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const TopButton = styled.button`
  background-color: #bceeff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px;
  font-weight: 700;
  border-radius: 20px;
  & :hover {
    background-color: #7eadff;
  }
`;
