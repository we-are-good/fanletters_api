import React from "react";
import LetterCard from "./LetterCard";
import { ListWrapper } from "../styles/LetterCardStyle";
import { useSelector } from "react-redux";

function LetterList() {
  const activeMember = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letters);

  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}의 팬레터가 없습니다. 첫번째 팬레터의 주인공이
          되어보세요.
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

export default LetterList;
