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
  display: inline-block;
  vertical-align: middle;
`;

const DateText = styled.p`
  font-size: 20px;
  color: white;
  display: inline-block;
  margin-left: 20px;
  white-space: pre-wrap;
  vertical-align: middle;
`;

export const Profile: React.FC = () => {
  const [current, setCurrent] = useState("00:00:00");
  const [date, setDate] = useState("xxx xxx xx xxxx\nxxx xxxxx");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrent(new Date().toLocaleTimeString("en-GB"));
      setDate(
        `${new Date().toDateString()}\n${new Date().toString().split(" ")[5]}`
      );
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
        <DateText>{date}</DateText>
      </StatusWrapper>
      <Directory />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </SearchContentWrapper>
  );
};
