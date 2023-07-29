import React from "react";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";
import styled, { keyframes } from "styled-components";
import LoadingSVG from "../../images/LoadingAnim.svg";
import { ActionCreators } from "../../redux/action";

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

const LoadContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledReactSVG = styled.div`
  position: absolute;
  width: 100vw;
  object-fit: cover;
  z-index: 1;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;

const StyledTypography = styled.p`
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

export const Loading: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <LoadContentWrapper>
      <StyledReactSVG>
        <ReactSVG src={LoadingSVG} />
      </StyledReactSVG>
      <StyledTypography
        onAnimationEnd={(event) =>
          event.animationName === "euuCaJ" &&
          dispatch(ActionCreators.changeState("Search"))
        }
      >
        LoadingComplete
      </StyledTypography>
    </LoadContentWrapper>
  );
};
