import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../modules/ui";

import {
  Fill1,
  Fill2,
  Fill3,
  Fill4,
  Fill5,
  Fill6,
  Fill7,
  Fill8,
  LoadContentWrapper,
  StyledReactSVG,
  StyledTypography,
} from "./style";

export const Loading: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <LoadContentWrapper>
      <StyledReactSVG>
        <svg viewBox="0 0 1920 709">
          <Fill1 d="M620.5 347L613 354.5L960 701.5H1920" stroke="#C4C4C4" />
          <Fill2 d="M1299.5 362L1307 354.5L960 7.5H0" stroke="#C4C4C4" />
          <Fill3 d="M1126 188.5L1292 354.5" stroke="#C4C4C4" />
          <Fill4 d="M1126 188.5L960 22.5" stroke="#C4C4C4" />
          <Fill5 d="M794 520.5L960 686.5" stroke="#C4C4C4" />
          <Fill6 d="M794 520.5L628 354.5" stroke="#C4C4C4" />
          <Fill7
            d="M942 2H964L972.5 10.5"
            stroke="#C4C4C4"
            onAnimationEnd={(event) =>
              event.animationName === "bFRFOS" &&
              dispatch(actions.setChapter("Search"))
            }
          />
          <Fill8 d="M979.5 707.5L957.5 707.5L949 699" stroke="#C4C4C4" />
        </svg>
      </StyledReactSVG>
      <StyledTypography>LoadingComplete</StyledTypography>
    </LoadContentWrapper>
  );
};
