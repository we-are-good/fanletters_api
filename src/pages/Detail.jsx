import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AvatarAndNickname,
  BtnsWrapper,
  Container,
  Content,
  DetailWrapper,
  HomeBtn,
  Nickname,
  Textarea,
  ToMember,
  UseInfo,
} from "../styles/DetailStyle";
import { AvatarFigure } from "../styles/LetterCardStyle";
import { getFormattedDate } from "../util/date";
import Button from "../util/Button";
import letterimage from "../assets/letterimage.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeContentThunk,
  deleteLetter,
  deleteLetterThunk,
  editLetter,
} from "../redux/modules/letterSlice";

function Detail() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  const letters = useSelector((state) => state.letters);

  const [isEdition, setIsEdition] = useState(false);
  const [editingText, setEditingText] = useState("");

  const { avatar, nickname, createdAt, writedTo, content } =
    letters.letters.find((letter) => letter.id === id);

  const onDeleteBtn = () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;

    dispatch(deleteLetterThunk(id));

    navigation("/home");
  };

  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");

    dispatch(changeContentThunk({ id, editingText })); //배열으로 들어갔음을 기억하자
    setIsEdition(false);
    setEditingText("");
  };

  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="홈으로" />
        </HomeBtn>
      </Link>

      <DetailWrapper>
        <UseInfo>
          <AvatarAndNickname>
            <AvatarFigure size="large">
              <img src={avatar ?? letterimage} alt="아바타이미지" />
            </AvatarFigure>

            <Nickname>{nickname}</Nickname>
          </AvatarAndNickname>
          <time>{getFormattedDate(createdAt)}</time>
        </UseInfo>
        <ToMember>To : {writedTo}</ToMember>

        {isEdition ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(event) => setEditingText(event.target.value)}
            />
            <BtnsWrapper>
              <Button onClick={() => setIsEdition(false)} text="취소" />
              <Button onClick={onEditDone} text="수정완료" />
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>

            <BtnsWrapper>
              <Button onClick={() => setIsEdition(true)} text="수정" />
              <Button onClick={onDeleteBtn} text="삭제" />
            </BtnsWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

export default Detail;
