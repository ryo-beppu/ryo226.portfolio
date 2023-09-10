import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const fadeOutText = keyframes`
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

const blink = keyframes`
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

const zoomOut = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
    opacity: 1;
  }
  20% {
    opacity: 0;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const draw = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const reverseDraw = (endPixel: number) => keyframes`
  100% {
    stroke-dashoffset: -${endPixel}px;
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
  filter: drop-shadow(0 0 5px #c4c4c4) drop-shadow(0 0 10px #c4c4c4);
`;

export const StyledTypography = styled.p`
  position: absolute;
  font-size: 2.7vw;
  margin: 0;
  z-index: 2;
  opacity: 0;
  font-style: italic;
  font-family: "Rajdhani";
  color: #c4c4c4;
  filter: drop-shadow(0 0 1px #c4c4c4) drop-shadow(0 0 10px #c4c4c4);
  will-change: opacity;
  animation: ${fadeIn} 1s linear 3s forwards, ${blink} 2s 3s forwards,
    ${fadeOutText} 3s linear 6s forwards;
`;

export const StyledPath = styled.path`
  fill: none;
  stroke-width: 2;
  stroke-miterlimit: 10;
  will-change: stroke-dashoffset;
`;

export const Fill1 = styled(StyledPath)`
  stroke-dasharray: 1462 1464;
  stroke-dashoffset: 1463;
  animation: ${draw} 2s ease 0s forwards,
    ${reverseDraw(1463)} 2s ease 9s forwards;
`;

export const Fill2 = styled(StyledPath)`
  stroke-dasharray: 1462 1464;
  stroke-dashoffset: 1463;
  animation: ${draw} 2s ease 0s forwards,
    ${reverseDraw(1463)} 2s ease 9s forwards;
`;

export const Fill3 = styled(StyledPath)`
  stroke-dasharray: 235 237;
  stroke-dashoffset: 236;
  animation: ${draw} 2s ease 1s forwards,
    ${reverseDraw(236)} 2s ease 9s forwards;
`;

export const Fill4 = styled(StyledPath)`
  stroke-dasharray: 235 237;
  stroke-dashoffset: 236;
  animation: ${draw} 2s ease 1s forwards,
    ${reverseDraw(236)} 2s ease 9s forwards;
`;

export const Fill5 = styled(StyledPath)`
  stroke-dasharray: 235 237;
  stroke-dashoffset: 236;
  animation: ${draw} 2s ease 1s forwards,
    ${reverseDraw(236)} 2s ease 9s forwards;
`;

export const Fill6 = styled(StyledPath)`
  stroke-dasharray: 235 237;
  stroke-dashoffset: 236;
  animation: ${draw} 2s ease 1s forwards,
    ${reverseDraw(236)} 2s ease 9s forwards;
`;

export const Fill7 = styled(StyledPath)`
  stroke-dasharray: 35 37;
  stroke-dashoffset: 36;
  animation: ${draw} 2s ease 2s forwards,
    ${reverseDraw(36)} 2s ease 10s forwards;
`;

export const Fill8 = styled(StyledPath)`
  stroke-dasharray: 35 37;
  stroke-dashoffset: 36;
  animation: ${draw} 2s ease 2s forwards,
    ${reverseDraw(36)} 2s ease 10s forwards;
`;
