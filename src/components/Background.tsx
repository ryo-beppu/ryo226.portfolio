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

const Background: React.FC = () => {
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
    </BackgroundWrapper>
  );
};

export default Background;
