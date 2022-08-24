import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DirectorySVG from "../../images/Profile/Directory.svg";

interface TimelineDataProps {
  title: string;
  top: number;
  left: number;
}

const DirectoryeData: TimelineDataProps[] = [
  { title: "Profile", top: 63, left: 0 },
  { title: "1", top: 56, left: 13 },
  { title: "2", top: 49, left: 26 },
  { title: "3", top: 42, left: 39 },
  { title: "4", top: 35, left: 52 },
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

const TitleText = styled.p`
  position: absolute;
  width: 376px;
  color: white;
  margin: 0;
  bottom: 0px;
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
  z-index: ${({ index }) => `-${index}`};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

export const Directory: React.FC = () => {
  return (
    <DirectoryWrapper>
      <DataHitText>Data Hit: 5</DataHitText>
      <Line>
        <path d="M0 1H376" stroke="#C4C4C4" />
      </Line>
      {DirectoryeData.map((directory, index) => {
        return (
          <StyledDirectory
            key={directory.title}
            top={directory.top}
            left={directory.left}
            index={index}
          >
            <ReactSVG src={DirectorySVG} />
          </StyledDirectory>
        );
      })}
      <TitleText>Profile</TitleText>
    </DirectoryWrapper>
  );
};
