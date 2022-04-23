import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import error from "../images/Error_animated.svg";

const StyledReactSVG = styled.div`
  width: 100vw;
  filter: drop-shadow(0 0 5px #ce0000) drop-shadow(0 0 10px #ce0000);
`;

const NotFound: React.FC = () => {
  return (
    <StyledReactSVG>
      <ReactSVG src={error} />
    </StyledReactSVG>
  );
};

export default NotFound;
