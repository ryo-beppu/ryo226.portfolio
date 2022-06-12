import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styled, { keyframes } from "styled-components";
import SearchBoxSVG from "../../images/Search/SearchBox.svg";
import { ProgressBar } from "./ProgressBar";
import { Delay } from "../../utils";

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const typing = keyframes`
  0%{
    width: 0ch;
  }
  100%{
    width: 9ch;
  }
`;

const blinkCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;

const SearchContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SearchText = styled.p`
  position: absolute;
  width: 0ch;
  font: 40px "IBM Plex Mono", monospace;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  margin: 0;
  top: 2px;
  left: 4px;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  animation: ${typing} 4s steps(9) 1s forwards,
    ${blinkCursor} 0.5s steps(1) infinite alternate;
`;

const SearchingText = styled.p`
  text-align: center;
  font: 40px "Roboto";
  color: white;
  margin-bottom: 24px;
`;

const SearchBox = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${fadeIn} 1s linear 0.5s forwards;
`;

export const Search: React.FC = () => {
  const [isSearchEnd, setIsSearchEnd] = useState(false);

  return (
    <SearchContentWrapper>
      <SearchBox>
        {isSearchEnd ? (
          <>
            <SearchingText>Searching...</SearchingText>
            <ProgressBar />
          </>
        ) : (
          <>
            <SearchText
              onAnimationEnd={async () => {
                await Delay(5);
                setIsSearchEnd(true);
              }}
            >
              Ryo Beppu
            </SearchText>
            <ReactSVG src={SearchBoxSVG} />
          </>
        )}
      </SearchBox>
    </SearchContentWrapper>
  );
};
