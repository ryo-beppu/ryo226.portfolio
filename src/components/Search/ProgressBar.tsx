import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { ActionCreators } from "../../redux/action";

const drawBar = keyframes`
  0%{
    stroke-dashoffset: 800px;
  }
  20%{
    stroke-dashoffset: 700px;
  }
  30%{
    stroke-dashoffset: 700px;
  }
  60%{
    stroke-dashoffset: 260px;
  }
  80%{
    stroke-dashoffset: 260px;
  }
  100%{
    stroke-dashoffset: 0px;
  }
`;

const drawPath = keyframes`
  0% {
    stroke-dashoffset: 87px;
  }
  50% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: -87px;
  }
`;

const ProgressBarWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledBar = styled.svg`
  position: absolute;
  z-index: 1;
  width: 800px;
  height: 11px;
  fill: none;
  stroke-dasharray: 800px;
  stroke-dashoffset: 800px;
  animation: ${drawBar} 14s linear 0.8s forwards;
`;

const StyledProgressDesign = styled.svg`
  position: absolute;
  z-index: 2;
  width: 860px;
  height: 61px;
  fill: none;
`;

const RightPath = styled.path`
  stroke-dasharray: 86px 88px;
  stroke-dashoffset: 87px;
  animation: ${drawPath} 6s ease 0s infinite;
`;

const LeftPath = styled.path`
  stroke-dasharray: 86px 88px;
  stroke-dashoffset: 87px;
  animation: ${drawPath} 4s ease 0s infinite;
`;

export const ProgressBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <ProgressBarWrapper>
      <StyledBar
        viewBox="0 0 800 11"
        onAnimationEnd={(event) =>
          event.animationName === "dqZYaj" &&
          dispatch(ActionCreators.changeState("Profile"))
        }
      >
        <path d="M0 5.5H800" stroke="#C4C4C4" strokeWidth="11" />
      </StyledBar>
      <StyledProgressDesign viewBox="0 0 860 61">
        <rect x="1" y="1" width="10" height="6" fill="#C4C4C4" />
        <rect x="849" y="54" width="10" height="6" fill="#C4C4C4" />
        <LeftPath d="M1 54V60H81" stroke="#C4C4C4" />
        <RightPath d="M859 7V1H779" stroke="#C4C4C4" />
      </StyledProgressDesign>
    </ProgressBarWrapper>
  );
};
