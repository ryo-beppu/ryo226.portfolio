import React, { useState } from "react";
import styled from "styled-components";
import { Clock } from "./Clock";
import { Directory } from "./Directory";
import { Profile } from "./Contents/Profile";
import { NoSelect } from "./Contents/NoSelect";
import { Skill } from "./Contents/Skill";
import { Contact } from "./Contents/Contact";
import { Work } from "./Contents/Work";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 200px);
  margin: 0px 55px;
`;

const LeftWrapper = styled.div`
  flex-basis: 39%;
  height: 100%;
`;

const RighttWrapper = styled.div`
  position: relative;
  flex-basis: 61%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightItem = styled.svg`
  position: absolute;
  top: 6px;
  right: 0px;
  width: 68px;
  height: 26px;
`;

const LeftItem = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 26px;
  height: 26px;
`;

export const Body: React.FC = () => {
  const [directory, setDirectory] = useState("");

  return (
    <Wrapper>
      <LeftWrapper>
        <Clock />
        <Directory onDirectoryClick={setDirectory} />
      </LeftWrapper>
      <RighttWrapper>
        {directory === "Profile" && <Profile />}
        {directory === "Skill" && <Skill />}
        {directory === "Work" && <Work />}
        {directory === "Contact" && <Contact />}
        {directory === "" && <NoSelect />}
        <RightItem>
          <rect x="63.5" y="0.5" width="4" height="4.05202" stroke="#C4C4C4" />
          <rect x="56.5" y="0.5" width="4" height="4.05202" stroke="#C4C4C4" />
          <rect
            x="63.5"
            y="7.57324"
            width="4"
            height="4.05202"
            stroke="#C4C4C4"
          />
          <path d="M54 2.52637H42" stroke="#C4C4C4" strokeWidth="3" />
          <path d="M65.5 14L65.5 26" stroke="#C4C4C4" strokeWidth="3" />
          <path d="M40 2.52637H28" stroke="#C4C4C4" strokeWidth="3" />
          <path d="M26 2.52637H14" stroke="#C4C4C4" strokeWidth="3" />
          <path d="M12 2.52637H0" stroke="#C4C4C4" strokeWidth="3" />
        </RightItem>
        <LeftItem>
          <rect
            x="0.5"
            y="21.4482"
            width="4"
            height="4.05202"
            stroke="#C4C4C4"
          />
          <rect
            x="7.5"
            y="21.4482"
            width="4"
            height="4.05202"
            stroke="#C4C4C4"
          />
          <rect
            x="0.5"
            y="14.375"
            width="4"
            height="4.05202"
            stroke="#C4C4C4"
          />
          <path d="M14 23.4736H26" stroke="#C4C4C4" strokeWidth="3" />
          <path d="M2.5 12L2.5 0" stroke="#C4C4C4" strokeWidth="3" />
        </LeftItem>
      </RighttWrapper>
    </Wrapper>
  );
};
