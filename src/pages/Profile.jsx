import React from "react";
import { useSelector } from "react-redux";
import LetterCard from "../components/LetterCard";
import { LetterWrapper } from "../styles/LetterCardStyle";
import {
  AbataWrapper,
  MypageBanner,
  MypageContainer,
  UserInformationWrapper,
} from "../styles/ProfileStyle";

function Profile() {
  const letters = useSelector((state) => state.letters);
  const getLoginUser = useSelector((state) => state.getLoginUser);

  const { nickname } = getLoginUser;

  const filteredLetters = letters.filter(
    (letter) => letter.nickname === nickname
  );
  return (
    <>
      <MypageContainer>
        <MypageBanner>
          <AbataWrapper>
            <img src="null" alt="아바타" />
          </AbataWrapper>
          <UserInformationWrapper>
            <div> {getLoginUser.userId} </div>
            <div> {getLoginUser.nickname} </div>
          </UserInformationWrapper>
        </MypageBanner>
        <LetterWrapper>
          {filteredLetters.length === 0 ? (
            <p>작성된 팬레터가 없습니다.</p>
          ) : (
            filteredLetters.map((letter) => (
              <LetterCard key={letter.id} letter={letter} />
            ))
          )}
        </LetterWrapper>
      </MypageContainer>
    </>
  );
}

export default Profile;
