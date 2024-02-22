import React, { useEffect } from "react";
import LetterCard from "./LetterCard";
import { ListWrapper } from "../styles/LetterCardStyle";
import { useDispatch, useSelector } from "react-redux";
import { __getLetters } from "../redux/modules/letterSlice";

function LetterList() {
  const activeMember = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();

  const filteredLetters = letters.letters.filter(
    (letter) => letter.writedTo === activeMember
  );

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

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
