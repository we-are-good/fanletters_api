import React from "react";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import { Container } from "../styles/HomeStyle";
import LetterList from "../components/LetterList";
import HeaderMypage from "../components/HeaderMypage";

function Home() {
  return (
    <div>
      <Container>
        <HeaderMypage />
        <Header />
        <AddForm />
        <LetterList />
      </Container>
    </div>
  );
}

export default Home;
