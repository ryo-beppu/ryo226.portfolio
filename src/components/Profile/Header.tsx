import React from "react";
import styled, { keyframes } from "styled-components";

const drawPath = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const Path1 = styled.path`
  stroke-dasharray: 1214px 1216px;
  stroke-dashoffset: 1215px;
  animation: ${drawPath} 2s ease 0.2s forwards;
`;

const Path2 = styled.path`
  stroke-dasharray: 12px 14px;
  stroke-dashoffset: 13px;
  animation: ${drawPath} 0.02s ease 2.2s forwards;
`;

const Path3 = styled.path`
  stroke-dasharray: 516px 518px;
  stroke-dashoffset: 517px;
  animation: ${drawPath} 1s ease 2.22s forwards;
`;

export const Header: React.FC = () => {
  return (
    <svg viewBox="0 0 1810 12" fill="none">
      <path width="10" height="6" fill="#C4C4C4" d="M0 2 L10 2 L10 8 L0 8 Z" />
      <path
        width="39"
        height="6"
        fill="#C4C4C4"
        d="M1771 6 L1810 6 L1810 12 L1771 12 Z"
      />
      <Path1
        d="M20 2L706.82 2C707.596 2 708.361 2.18073 709.056 2.52786L714.944 5.47214C715.639 5.81927 716.404 6 717.18 6H1233"
        stroke="#C4C4C4"
        strokeWidth="3"
      />
      <Path2 d="M1233 2L1245 2" stroke="#C4C4C4" strokeWidth="3" />
      <Path3 d="M1245 6H1761" stroke="#C4C4C4" strokeWidth="3" />
    </svg>
  );
};
