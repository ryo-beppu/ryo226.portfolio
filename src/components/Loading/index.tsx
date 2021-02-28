import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";
import styled, { keyframes } from "styled-components";
import LoadingSVG from "../../images/LoadingAnim.svg";
import { getWeatherData, ActionCreators } from "../../redux/action";

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
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledReactSVG = styled(ReactSVG)`
  position: absolute;
  width: 2560px;
  z-index: 1;
  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);
`;

const StyledTypography = styled.p`
  position: absolute;
  font-size: 70px;
  margin: 0;
  z-index: 2;
  opacity: 0;
  font-style: italic;
  font-family: "Rajdhani";
  animation: ${fadeIn} 1s linear 3s forwards, ${blink} 2s 3s forwards,
    ${fadeOutText} 3s linear 6s forwards;
`;

const Opening: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

  return (
    <LoadContentWrapper>
      <StyledReactSVG src={LoadingSVG} />
      <StyledTypography
        onAnimationEnd={(animationName) =>
          animationName.animationName === "euuCaJ"
            ? dispatch(ActionCreators.changeState("Timeline"))
            : ""
        }
      >
        LoadingComplete
      </StyledTypography>
    </LoadContentWrapper>
  );
};

export default Opening;
