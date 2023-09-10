import React from "react";

import styled from "styled-components";

import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

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
