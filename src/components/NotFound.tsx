import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import error from "../images/Error_animated.svg";

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: drop-shadow(0 0 5px #ce0000) drop-shadow(0 0 10px #ce0000);
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <ReactSVG src={error} />
    </NotFoundWrapper>
  );
};

export default NotFound;
