import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const fadeOutText = keyframes`
  0% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const blink = keyframes`
  40% {
    opacity: .85;
  }
  42% {
    opacity: .4;
  }
  43% {
    opacity: .85;
  }
  45% {
    opacity: .4;
  }
  46% {
    opacity: .85;
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LoadContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const StyledReactSVG = styled.div`
  position: absolute;
  width: 100vw;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;

export const StyledTypography = styled.p`
  position: absolute;
  font-size: 2.7vw;
  margin: 0;
  z-index: 2;
  opacity: 0;
  font-style: italic;
  font-family: "Rajdhani";
  color: white;
  filter: drop-shadow(0 0 1px white) drop-shadow(0 0 10px white);
  animation: ${fadeIn} 1s linear 3s forwards, ${blink} 2s 3s forwards,
    ${fadeOutText} 3s linear 6s forwards;
  will-change: ${fadeIn}, ${blink}, ${fadeOutText};
`;
