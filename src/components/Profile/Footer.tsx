import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: 100px;
  margin: 0px 55px;
`;

const drawPath = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const Path1 = styled.path`
  stroke-dasharray: 1185px 1187px;
  stroke-dashoffset: 1186px;
  animation: ${drawPath} 2s ease 0.2s forwards;
`;

const Path2 = styled.path`
  stroke-dasharray: 12px 14px;
  stroke-dashoffset: 13px;
  animation: ${drawPath} 0.02s ease 2.2s forwards;
`;

const Path3 = styled.path`
  stroke-dasharray: 545px 547px;
  stroke-dashoffset: 546px;
  animation: ${drawPath} 1s ease 2.22s forwards;
`;

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <svg viewBox="0 0 1810 12" fill="none">
        <path
          width="10"
          height="6"
          fill="#C4C4C4"
          d="M1800 0 L1810 0 L1810 6 L1800 6 Z"
        />
        <path
          width="39"
          height="6"
          fill="#C4C4C4"
          d="M0 7 L39 7 L39 13 L0 13 Z"
        />
        <Path1
          d="M49 10H706.82C707.596 10 708.361 9.81927 709.056 9.47214L714.944 6.52786C715.639 6.18073 716.404 6 717.18 6H1233"
          stroke="#C4C4C4"
          strokeWidth="3"
        />
        <Path2 d="M1233 10L1245 10" stroke="#C4C4C4" strokeWidth="3" />
        <Path3 d="M1245 6H1790" stroke="#C4C4C4" strokeWidth="3" />
      </svg>
    </Wrapper>
  );
};
