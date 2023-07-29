import React from "react";
import styled from "styled-components";
import { Clock } from "./Clock";
import { Directory } from "./Directory";

const Wrapper = styled.div`
  position: relative;
  height: calc(100% - 200px);
  margin: 0px 55px;
`;

const LeftWrapper = styled.div`
  width: 706px;
  height: 100%;
`;

const RighttWrapper = styled.div`
  width: 1067px;
  height: 100%;
`;

export const Body: React.FC = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Clock />
        <Directory />
      </LeftWrapper>
      <RighttWrapper />
    </Wrapper>
  );
};
