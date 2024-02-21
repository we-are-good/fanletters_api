import styled from "styled-components";

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 20px;
  margin: 20px;
  gap: 20px;
`;

export const MypageBanner = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 100px;
  background-color: skyblue;
`;

export const AbataWrapper = styled.div`
  height: 130px;
  width: 130px;
  border: 5px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const UserInformationWrapper = styled.div`
  height: 100px;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
