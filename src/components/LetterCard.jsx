import React from "react";
import {
  AvatarFigure,
  Content,
  LetterWrapper,
  NicknameAndData,
  UserInfo,
} from "../styles/LetterCardStyle";
import letterimage from "../assets/letterimage.png";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../util/date";

function LetterCard({ letter }) {
  const navigation = useNavigate();
  return (
    <LetterWrapper onClick={() => navigation(`/detail/${letter.id}`)}>
      <UserInfo>
        <AvatarFigure>
          <img src={letter.avatar ?? letterimage} alt="아바타이미지" />
        </AvatarFigure>
        <NicknameAndData>
          <p>{letter.nickname}</p>
          <time>{getFormattedDate(letter.createdAt)}</time>
        </NicknameAndData>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

export default LetterCard;
