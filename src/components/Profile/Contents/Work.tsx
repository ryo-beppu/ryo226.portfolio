import React from "react";
import styled from "styled-components";
import { TYPOGRAPHY_COLOR } from "../../../constants";

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const ProductNameTypography = styled.p`
  color: ${TYPOGRAPHY_COLOR};
  margin: 0px;
  font-size: 20px;
`;

export const Work: React.FC = () => {
  return (
    <CardWrapper>
      <a
        href="https://github.com/ryo-beppu/ryo226.portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=ryo-beppu&repo=ryo226.portfolio&show_owner=true"
          aria-label="ryo226.portfolio Card"
          rel="preload"
        />
      </a>
      <a
        href="https://github.com/ryo-beppu/ryo-beppu.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=ryo-beppu&repo=ryo-beppu.github.io&show_owner=true"
          aria-label="ryo-beppu.github.io Card"
          rel="preload"
        />
      </a>
      <a
        href="https://github.com/nukoneko-tarou/elves"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github-readme-stats.vercel.app/api/pin/?username=nukoneko-tarou&repo=elves&show_owner=true"
          aria-label="elves Card"
          rel="preload"
        />
      </a>
      <div>
        <ProductNameTypography>Unreal Engine Products</ProductNameTypography>
        <a
          href="https://www.unrealengine.com/marketplace/en-US/product/openweathermapplugin"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeatherMapPlugin
        </a>
      </div>
    </CardWrapper>
  );
};
