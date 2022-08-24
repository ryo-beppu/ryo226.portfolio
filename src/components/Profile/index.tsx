import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Directory } from "./Directory";

const SearchContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 92px;
  left: 55px;
  width: calc(100% - 110px);
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 92px;
  left: 55px;
  width: calc(100% - 110px);
`;

const StatusWrapper = styled.div`
  position: absolute;
  top: 102px;
  left: 104px;
`;

const ClockText = styled.p`
  font-size: 20px;
  color: white;
`;

export const Profile: React.FC = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrent(new Date().toLocaleTimeString("en-GB"));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <SearchContentWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <StatusWrapper>
        <ClockText>{current}</ClockText>
      </StatusWrapper>
      <Directory />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </SearchContentWrapper>
  );
};
