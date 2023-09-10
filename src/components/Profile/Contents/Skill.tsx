import React from "react";

import styled from "styled-components";

import { BASE_COLOR } from "../../../constants";

const TitleTypography = styled.p`
  color: ${BASE_COLOR};
  margin: 0px;
  font-size: 30px;
`;

const UserNameTypography = styled.p`
  color: ${BASE_COLOR};
  margin: 0px;
  font-size: 20px;
`;

const ContentsWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  height: 200px;
`;

export const Skill: React.FC = () => {
  return (
    <div>
      <TitleTypography>
        GitHub Status (Data from public repositories only)
      </TitleTypography>
      <ContentsWrapper>
        <div>
          <UserNameTypography>ryo-beppu</UserNameTypography>
          <CardWrapper>
            <img
              src="https://github-readme-stats.vercel.app/api?username=ryo-beppu&theme=prussian&show_icons=true&include_all_commits=true&hide_rank=true"
              aria-label="GitHub Stats Card"
              rel="preload"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ryo-beppu&theme=prussian&show_icons=true"
              aria-label="Top Languages Card"
              rel="preload"
            />
          </CardWrapper>
        </div>
        <div>
          <UserNameTypography>nukoneko-tarou</UserNameTypography>
          <CardWrapper>
            <img
              src="https://github-readme-stats.vercel.app/api?username=nukoneko-tarou&theme=prussian&show_icons=true&include_all_commits=true&hide_rank=true"
              aria-label="GitHub Stats Card"
              rel="preload"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nukoneko-tarou&theme=prussian&show_icons=true"
              aria-label="Top Languages Card"
              rel="preload"
            />
          </CardWrapper>
        </div>
      </ContentsWrapper>
    </div>
  );
};
