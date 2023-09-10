import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import styled from "styled-components";

import { TYPOGRAPHY_COLOR } from "../../constants";
import ClockItem from "../../images/Profile/ClockItem.svg";

const Wrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ClockItemWrapper = styled.div`
  height: 22px;
  margin-left: 75px;
`;

const ClockText = styled.p`
  font-size: 20px;
  color: ${TYPOGRAPHY_COLOR};
  display: inline-block;
  vertical-align: middle;
  margin: 0px;
`;

const DateText = styled.p`
  font-size: 12px;
  color: ${TYPOGRAPHY_COLOR};
  display: inline-block;
  margin-left: 20px;
  white-space: pre-wrap;
  vertical-align: middle;
  margin: 0px;
`;

export const Clock: React.FC = () => {
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
    <Wrapper>
      <ClockText>{current}</ClockText>
      <DateText>{date}</DateText>
      <ClockItemWrapper>
        <ReactSVG src={ClockItem} />
      </ClockItemWrapper>
    </Wrapper>
  );
};
