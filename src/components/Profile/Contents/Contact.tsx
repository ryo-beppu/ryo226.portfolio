import React from "react";

import styled from "styled-components";

import { TYPOGRAPHY_COLOR } from "../../../constants";
import GithubIcon from "../../../images/Logo/Github.svg";
import XLogoSvg from "../../../images/Logo/X.svg";

const StyledLink = styled.a`
  color: ${TYPOGRAPHY_COLOR};
  margin: 0px;
  font-size: 20px;
  text-decoration: none;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentsWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Logo = styled.img`
  width: 34px;
`;

const UserNameTypography = styled.p`
  color: ${TYPOGRAPHY_COLOR};
  margin: 0px;
  font-size: 30px;
`;

export const Contact: React.FC = () => {
  return (
    <div>
      <ContentsWrapper>
        <UserNameTypography>ryo-beppu</UserNameTypography>
        <LinkWrapper>
          <Logo src={XLogoSvg} aria-label="X Logo" />
          <StyledLink
            href="https://twitter.com/@ryo_norn26"
            target="_blank"
            rel="noopener noreferrer"
          >
            ryo_norn26
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <Logo src={GithubIcon} aria-label="Github Logo" />
          <StyledLink
            href="https://github.com/ryo-beppu"
            target="_blank"
            rel="noopener noreferrer"
          >
            ryo-beppu
          </StyledLink>
        </LinkWrapper>
        <UserNameTypography>nukoneko-tarou</UserNameTypography>
        <LinkWrapper>
          <Logo src={XLogoSvg} aria-label="X Logo" />
          <StyledLink
            href="https://twitter.com/@nukoneko_tarou"
            target="_blank"
            rel="noopener noreferrer"
          >
            nukoneko_tarou
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <Logo src={GithubIcon} aria-label="Github Logo" />
          <StyledLink
            href="https://github.com/nukoneko-tarou"
            target="_blank"
            rel="noopener noreferrer"
          >
            nukoneko-tarou
          </StyledLink>
        </LinkWrapper>
      </ContentsWrapper>
    </div>
  );
};
