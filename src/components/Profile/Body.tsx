import React, { useState } from "react";
import styled from "styled-components";
import { Clock } from "./Clock";
import { Directory } from "./Directory";
import { Profile } from "./Contents/Profile";

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
  flex-basis: 61%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body: React.FC = () => {
  const [directory, setDirectory] = useState("");

  return (
    <Wrapper>
      <LeftWrapper>
        <Clock />
        <Directory onDirectoryClick={setDirectory} />
      </LeftWrapper>
      <RighttWrapper>{directory === "Profile" && <Profile />}</RighttWrapper>
    </Wrapper>
  );
};
