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
  { title: "Profile", zIndex: 5, top: 63, left: 0 },
  { title: "Skil", zIndex: 4, top: 56, left: 13 },
  { title: "Work", zIndex: 3, top: 49, left: 26 },
  { title: "Contact", zIndex: 2, top: 42, left: 39 },
];

const DirectoryWrapper = styled.div`
  position: absolute;
  left: 250px;
  height: 293px;
  width: 376px;
`;

const DataHitText = styled.p`
  position: absolute;
  width: 376px;
  color: white;
  margin: 0;
  top: 0px;
  text-align: center;
  font-size: 20px;
`;

const Line = styled.svg`
  position: absolute;
  top: 24px;
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
    <DirectoryWrapper>
      <DataHitText>{`Data Hit: ${DirectoryeData.length}`}</DataHitText>
      <Line>
        <path d="M0 1H376" stroke="#C4C4C4" />
      </Line>
      {DirectoryeData.map((directory) => {
        return (
          <StyledDirectory
            key={directory.title}
            top={directory.top}
            left={directory.left}
            index={directory.zIndex}
            onMouseOver={() => setDirectoryTitle(directory.title)}
          >
            <ReactSVG src={DirectorySVG} />
          </StyledDirectory>
        );
      })}
      <TitleText>{directoryTitle}</TitleText>
    </DirectoryWrapper>
  );
};
