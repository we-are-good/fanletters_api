import styled, { css } from "styled-components";

export const LetterWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 20px;
  border: 5px solid yellowgreen;
  padding: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const AvatarFigure = styled.figure`
  ${(props) => {
    if (props.size === "large") {
      return css`
        width: 75px;
        height: 75px;
      `;
    }
    return css`
      width: 50px;
      height: 50px;
    `;
  }}
  border-radius: 50%;
  overflow: hidden;
  &img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const NicknameAndData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Content = styled.p`
  border: 3px solid green;
  border-radius: 10px;
  padding: 12px;
  margin-left: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; //생략부호
  cursor: pointer;
  transition: all 0.2s;
  &:hovor {
    transform: scale(1.02);
  }
`;

export const ListWrapper = styled.ul`
  background-color: #fdf4e6;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 20px;
`;
