import styled, { css } from "styled-components";

export const TabsWrapepr = styled.ul`
  background-color: aliceblue;
  display: flex;
  justify-content: space-evenly;
  padding: 12px;
  margin: 10px;
  gap: 20px;
  border-radius: 20px;
  list-style: none;
`;

export const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: green;
        color: white;
      `;
    }
    return css`
      background-color: paleturquoise;
      color: #233f40;
    `;
  }}

  font-size: 20px;
  font-weight: 600;
  border: #257299 solid 5px;
  padding: 10px;
  width: 120px;
  text-align: center;

  border-radius: 20px;
  cursor: pointer;
`;
