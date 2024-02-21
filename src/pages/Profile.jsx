import React from "react";
import {
  AbataWrapper,
  MypageBanner,
  MypageContainer,
  UserInformationWrapper,
} from "../styles/ProfileStyle";
import { LetterWrapper } from "../styles/LetterCardStyle";
import { useSelector } from "react-redux";
import LetterCard from "../components/LetterCard";

function Profile() {
  const loginUser = useSelector((state) => state.auth);
  const letters = useSelector((state) => state.letters);

  const filteredLetters = letters.filter(
    (letter) => letter.nickname === loginUser.nickname
  );
  return (
    <>
      <MypageContainer>
        <MypageBanner>
          <AbataWrapper>
            <img src="null" alt="아바타" />
          </AbataWrapper>
          <UserInformationWrapper>
            <div> {loginUser.userId} </div>
            <div> {loginUser.nickname} </div>
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
