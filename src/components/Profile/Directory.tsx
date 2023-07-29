import React, { useState } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DirectorySVG from "../../images/Profile/Directory.svg";

interface TimelineDataProps {
  title: string;
  zIndex: number;
  top: number;
  left: number;
}

const DirectoryeData: TimelineDataProps[] = [
  { title: "Profile", zIndex: 5, top: 39, left: 0 },
  { title: "Skil", zIndex: 4, top: 32, left: 13 },
  { title: "Work", zIndex: 3, top: 25, left: 26 },
  { title: "Contact", zIndex: 2, top: 18, left: 39 },
];

const Wrapper = styled.div`
  position: absolute;
  top: 36px;
  width: 706px;
  height: calc(100% - 36px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectoryWrapper = styled.div`
  width: 376px;
  height: 287px;
`;

const DirectoryItemsWrapper = styled.div`
  position: relative;
  height: 263px;
`;

const DataHitWrapper = styled.div`
  height: 24px;
`;

const DataHitText = styled.p`
  width: 376px;
  height: 24px;
  color: white;
  margin: 0;
  text-align: center;
  font-size: 20px;
`;

const Line = styled.svg`
  position: absolute;
  width: 376px;
  height: 2px;
  fill: none;
`;

const StyledDirectory = styled.div<{
  top: number;
  left: number;
  index: number;
}>`
  position: absolute;
  z-index: ${({ index }) => `${index}`};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};

  &:hover {
    top: ${({ top }) => `${top - 12}px`};
  }
`;

const TitleText = styled.p`
  position: absolute;
  width: 376px;
  color: white;
  margin: 0;
  bottom: 0px;
  text-align: center;
  font-size: 20px;
`;

export const Directory: React.FC = () => {
  const [directoryTitle, setDirectoryTitle] = useState("");

  return (
    <Wrapper>
      <DirectoryWrapper>
        <DataHitWrapper>
          <DataHitText>{`Data Hit: ${DirectoryeData.length}`}</DataHitText>
          <Line>
            <path d="M0 1H376" stroke="#C4C4C4" />
          </Line>
        </DataHitWrapper>
        <DirectoryItemsWrapper>
          {DirectoryeData.map((directory) => (
            <StyledDirectory
              key={directory.title}
              top={directory.top}
              left={directory.left}
              index={directory.zIndex}
              onMouseOver={() => setDirectoryTitle(directory.title)}
            >
              <ReactSVG src={DirectorySVG} />
            </StyledDirectory>
          ))}
          <TitleText>{directoryTitle}</TitleText>
        </DirectoryItemsWrapper>
      </DirectoryWrapper>
    </Wrapper>
  );
};
