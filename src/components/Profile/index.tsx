import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
};
