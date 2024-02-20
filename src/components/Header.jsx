import React from "react";
import { Banner, Title } from "../styles/HeaderStyle";
import Tabs from "./Tabs";

function Header() {
  return (
    <Banner>
      <Title> Artist FanLetters </Title>
      <Tabs />
    </Banner>
  );
}

export default Header;
