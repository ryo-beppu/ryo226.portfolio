import React from "react";
import styled from "styled-components";
import { TYPOGRAPHY_COLOR } from "../../../constants";

const StyledTypography = styled.p`
  color: ${TYPOGRAPHY_COLOR};
  margin: 0px;
  font-size: 20px;
`;

export const NoSelect: React.FC = () => {
  return (
    <div>
      <StyledTypography>No data available.</StyledTypography>
      <StyledTypography>Please select a file.</StyledTypography>
    </div>
  );
};
