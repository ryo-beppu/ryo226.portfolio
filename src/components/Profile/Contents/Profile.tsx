import React from "react";
import styled from "styled-components";
import { TYPOGRAPHY_COLOR } from "../../../constants";

const BIRTHDAY = {
  year: 1998,
  month: 2,
  date: 26,
};

const GetAge = ({
  year,
  month,
  date,
}: {
  year: number;
  month: number;
  date: number;
}) => {
  const today = new Date();
  const birthday = new Date(year, month - 1, date);
  const currentYearBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (today < currentYearBirthday) {
    return today.getFullYear() - birthday.getFullYear() - 1;
  }

  return today.getFullYear() - birthday.getFullYear();
};

const Wrapper = styled.div``;

const StyledTypography = styled.p`
  color: ${TYPOGRAPHY_COLOR};
  margin: 0px;
  font-size: 40px;
`;

export const Profile: React.FC = () => {
  return (
    <Wrapper>
      <StyledTypography>Name: Ryo Beppu</StyledTypography>
      <StyledTypography>D.O.B: 02/26/1998</StyledTypography>
      <StyledTypography>{`Age: ${GetAge(BIRTHDAY)}`}</StyledTypography>
      <StyledTypography>Occupation: Web Engineer</StyledTypography>
    </Wrapper>
  );
};
