import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import UpperLeftSVG from "../images/Background/UpperLeft.svg";
import LowerLeftSVG from "../images/Background/LowerLeft.svg";
import UpperRightSVG from "../images/Background/UpperRight.svg";
import LowerRightSVG from "../images/Background/LowerRight.svg";

const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

const UpperLeftContent = styled.div`
  position: absolute;
  height: 42px;
  top: 10px;
  left: 10px;
`;

const LowerLeftContent = styled.div`
  position: absolute;
  height: 42px;
  bottom: 10px;
  left: 10px;
`;
const UpperRightContent = styled.div`
  position: absolute;
  height: 42px;
  top: 10px;
  right: 10px;
`;
const LowerRightContent = styled.div`
  position: absolute;
  height: 42px;
  bottom: 10px;
  right: 10px;
`;

const Copyright = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 10px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background: React.FC = () => {
  const CopyrightText = ` 2018-${new Date().getFullYear()} Ryo Beppu.`;

  return (
    <BackgroundWrapper>
      <UpperLeftContent>
        <ReactSVG src={UpperLeftSVG} />
      </UpperLeftContent>
      <LowerLeftContent>
        <ReactSVG src={LowerLeftSVG} />
      </LowerLeftContent>
      <UpperRightContent>
        <ReactSVG src={UpperRightSVG} />
      </UpperRightContent>
      <LowerRightContent>
        <ReactSVG src={LowerRightSVG} />
      </LowerRightContent>
      <Copyright>
        &copy;
        {CopyrightText}
      </Copyright>
    </BackgroundWrapper>
  );
};

export default Background;
