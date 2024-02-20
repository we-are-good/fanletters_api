import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;
export const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const DetailWrapper = styled.section`
  background-color: #0f452a;
  color: whitesmoke;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
  border-radius: 20px;
`;

export const UseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Nickname = styled.span`
  font-size: 32px;
`;

export const ToMember = styled.span`
  font-size: 24px;
`;

export const Content = styled.p`
  font-size: 24px;
  line-height: 30px; //검색
  padding: 12px;
  background-color: green;
  border-radius: 20px;
  height: 200px;
`;
export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const Textarea = styled.textarea`
  font-size: 24px;
  line-height: 30px; //검색
  padding: 12px;
  background-color: #dafeda;
  border-radius: 20px;
  height: 200px;
  resize: none;
  color: black;
`;
