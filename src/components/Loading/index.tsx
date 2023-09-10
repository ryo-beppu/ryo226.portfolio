import React from "react";
import { useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";

import LoadingSVG from "../../images/LoadingAnim.svg";
import { actions } from "../../modules/ui";

import { LoadContentWrapper, StyledReactSVG, StyledTypography } from "./style";

export const Loading: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <LoadContentWrapper>
      <StyledReactSVG>
        <ReactSVG src={LoadingSVG} />
      </StyledReactSVG>
      <StyledTypography
        onAnimationEnd={(event) =>
          event.animationName === "euuCaJ" &&
          dispatch(actions.setChapter("Search"))
        }
      >
        LoadingComplete
      </StyledTypography>
    </LoadContentWrapper>
  );
};
