import React from "react";
import AddForm from "../components/AddForm";
import Header from "../components/Header";
import { Container } from "../styles/HomeStyle";
import LetterList from "../components/LetterList";

function Home() {
  return (
    <div>
      <Container>
        <Header />
        <AddForm />
        <LetterList />
      </Container>
    </div>
  );
}

export default Home;
